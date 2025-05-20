const cartQuery = require("../queries/cartQuery");

module.exports = {
  // GET /cart/:userId
  async getCart(req, res) {
    try {
      const { userId } = req.params;
      const cart = await cartQuery.getCartByUserId(userId);
      if (!cart) return res.status(404).json({ message: "Không tìm thấy giỏ hàng" });
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // POST /cart/:userId/add
  async addToCart(req, res) {
    try {
      const { userId } = req.params;
      const { productId, quantity } = req.body;

      const cart = await cartQuery.findOrCreateCart(userId);
      const item = await cartQuery.addOrUpdateCartItem(cart.id, productId, quantity);

      res.status(200).json({ message: "Thêm sản phẩm thành công", item });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // PUT /cart/:userId/update
  async updateQuantity(req, res) {
    try {
      const { userId } = req.params;
      const { productId, quantity } = req.body;

      const cart = await cartQuery.findOrCreateCart(userId);
      const updatedItem = await cartQuery.updateCartItem(cart.id, productId, quantity);

      res.json({ message: "Cập nhật thành công", updatedItem });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // DELETE /cart/:userId/remove/:productId
  async removeFromCart(req, res) {
    try {
      const { userId, productId } = req.params;

      const cart = await cartQuery.findOrCreateCart(userId);
      await cartQuery.removeCartItem(cart.id, productId);

      res.json({ message: "Xoá sản phẩm khỏi giỏ thành công" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
