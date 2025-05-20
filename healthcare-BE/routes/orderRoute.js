const express = require("express");
const route = express.Router();

const orderController = require("../controllers/orderController");
const authenticateUser = require("../middlewares/authMiddleware");
const authorizeUser = require("../middlewares/authorizeUser");

route.use(authenticateUser);

route.get("/:userId", authorizeUser, orderController.getOrders);
route.post("/:userId", authorizeUser, orderController.placeOrder);

module.exports = route;
