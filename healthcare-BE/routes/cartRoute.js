const express = require("express");
const route = express.Router();

const cartController = require("../controllers/cartController");
const authenticateUser = require("../middlewares/authMiddleware");
const authorizeUser = require("../middlewares/authorizeUser");

route.use(authenticateUser);

route.get("/:userId", authorizeUser, cartController.getCart);
route.post("/:userId/add", authorizeUser, cartController.addToCart);
route.put("/:userId/update", authorizeUser, cartController.updateCart);
route.delete("/:userId/remove/:productId", authorizeUser, cartController.removeFromCart);

module.exports = route;
