const orderQuery = require("../queries/orderQuery");

module.exports = {
  async placeOrder(req, res) {
    try {
      const { userId } = req.params;

      // Lấy giỏ hàng kèm sản phẩm
      const cart = await orderQuery.getCartWithItems(userId);
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Giỏ hàng trống" });
      }

      // Tạo đơn hàng từ giỏ
      const order = await orderQuery.createOrder(userId, cart.items);

      res.status(201).json({ message: "Đặt hàng thành công", order });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getOrders(req, res) {
    try {
      const { userId } = req.params;
      const orders = await orderQuery.getOrdersByUser(userId);
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
