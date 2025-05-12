const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

route.get("/", productController.getAllProduct);

route.get("/category/:categoryId", productController.getProductByCategory);

route.get("/:id", productController.getProductById);

module.exports = route;
