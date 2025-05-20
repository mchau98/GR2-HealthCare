const { sequelize, Cart, CartItem, Product, Order, OrderItem } = require("../models");

async function getCartWithItems(userId) {
  return Cart.findOne({
    where: { userId },
    include: [
      {
        model: CartItem,
        as: "items",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
  });
}

async function clearCart(cartId) {
  return CartItem.destroy({ where: { cartId } });
}

async function createOrder(userId, items) {
  const t = await sequelize.transaction();

  try {
    // Kiểm tra tồn kho
    for (const item of items) {
      if (item.quantity > item.product.quantity) {
        throw new Error(`Sản phẩm "${item.product.name}" không đủ số lượng (còn ${item.product.quantity})`);
      }
    }

    // Tính tổng tiền
    const totalPrice = items.reduce((sum, item) => {
      return sum + item.quantity * item.product.price;
    }, 0);

    // Tạo đơn hàng
    const order = await Order.create(
      {
        userId,
        totalPrice,
        status: "pending",
      },
      { transaction: t }
    );

    // Tạo order items & giảm tồn kho
    for (const item of items) {
      await OrderItem.create(
        {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: item.product.price,
        },
        { transaction: t }
      );

      await Product.update(
        { quantity: item.product.quantity - item.quantity },
        { where: { id: item.productId }, transaction: t }
      );
    }

    // Xóa giỏ hàng
    const cart = await Cart.findOne({ where: { userId }, transaction: t });
    if (cart) {
      await clearCart(cart.id);
    }

    await t.commit();
    return order;
  } catch (error) {
    await t.rollback();
    throw error;
  }
}

async function getOrdersByUser(userId) {
  return Order.findAll({
    where: { userId },
    include: [
      {
        model: OrderItem,
        as: "items",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
}

module.exports = {
  createOrder,
  getOrdersByUser,
  getCartWithItems,
  clearCart,
};
