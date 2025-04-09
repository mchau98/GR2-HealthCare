const express = require("express");
const route = express.Router();
const { getPosts, getPost } = require("../controllers/postsController");

route.get("/getPosts", getPosts);
route.get("/getPost/:id", getPost);

module.exports = route;
