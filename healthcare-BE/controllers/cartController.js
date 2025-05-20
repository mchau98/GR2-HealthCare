const cartQuery = require("../queries/cartQuery");

module.exports = {
  async getCart(req, res) {
    try {
      const { userId } = req.params;
      const cart = await cartQuery.getCartWithItems(userId);
      if (!cart) return res.status(404).json({ message: "Giỏ hàng không tồn tại" });
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async addToCart(req, res) {
    try {
      const { userId } = req.params;
      const { productId, quantity } = req.body;
      if (!productId || !quantity) return res.status(400).json({ message: "Thiếu thông tin sản phẩm hoặc số lượng" });

      const cartItem = await cartQuery.addItemToCart(userId, productId, quantity);
      res.status(201).json(cartItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async updateCart(req, res) {
    try {
      const { userId } = req.params;
      const { productId, quantity } = req.body;
      if (!productId || !quantity) return res.status(400).json({ message: "Thiếu thông tin sản phẩm hoặc số lượng" });

      const cartItem = await cartQuery.updateCartItem(userId, productId, quantity);
      res.json(cartItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async removeFromCart(req, res) {
    try {
      const { userId, productId } = req.params;
      const success = await cartQuery.removeCartItem(userId, productId);
      if (success) {
        res.json({ message: "Xóa sản phẩm khỏi giỏ thành công" });
      } else {
        res.status(404).json({ message: "Sản phẩm không tồn tại trong giỏ hàng" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
