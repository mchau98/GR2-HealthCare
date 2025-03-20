const express = require("express");
const route = express.Router();
const { getPosts } = require("../controllers/postsController");

route.get("/posts", getPosts);

module.exports = route;
