const express = require("express");
const route = express.Router();
const { getCalo } = require("../controllers/caloController");

route.post("/getCalo", getCalo);
module.exports = route;
