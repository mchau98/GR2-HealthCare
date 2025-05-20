const { Cart, CartItem, Product } = require("../models");

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

async function addItemToCart(userId, productId, quantity) {
  let cart = await Cart.findOne({ where: { userId } });
  if (!cart) {
    cart = await Cart.create({ userId });
  }

  // Kiểm tra item đã tồn tại chưa
  let cartItem = await CartItem.findOne({
    where: { cartId: cart.id, productId },
  });

  if (cartItem) {
    // Cập nhật số lượng
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    // Thêm mới
    cartItem = await CartItem.create({
      cartId: cart.id,
      productId,
      quantity,
    });
  }

  return cartItem;
}

async function updateCartItem(userId, productId, quantity) {
  const cart = await Cart.findOne({ where: { userId } });
  if (!cart) throw new Error("Giỏ hàng không tồn tại");

  const cartItem = await CartItem.findOne({
    where: { cartId: cart.id, productId },
  });

  if (!cartItem) throw new Error("Sản phẩm không tồn tại trong giỏ");

  cartItem.quantity = quantity;
  await cartItem.save();

  return cartItem;
}

async function removeCartItem(userId, productId) {
  const cart = await Cart.findOne({ where: { userId } });
  if (!cart) throw new Error("Giỏ hàng không tồn tại");

  const deleted = await CartItem.destroy({
    where: { cartId: cart.id, productId },
  });

  return deleted > 0;
}

module.exports = {
  getCartWithItems,
  addItemToCart,
  updateCartItem,
  removeCartItem,
};
