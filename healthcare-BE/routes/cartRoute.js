const express = require("express");
const route = express.Router();
const cartController = require("../controllers/cartController");

route.get("/:userId", cartController.getCart);
route.post("/:userId/add", cartController.addToCart);
route.put("/:userId/update", cartController.updateQuantity);
route.delete("/:userId/remove/:productId", cartController.removeFromCart);

module.exports = route;
