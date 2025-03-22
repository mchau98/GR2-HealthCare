const express = require("express");
const route = express.Router();
const { getPosts } = require("../controllers/postsController");

route.get("/getPosts", getPosts);

module.exports = route;
