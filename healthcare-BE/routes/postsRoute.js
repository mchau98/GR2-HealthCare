const express = require("express");
const route = express.Router();
const { getPosts } = require("../controllers/postController");

route.get("/posts", getPosts);

module.exports = route;
