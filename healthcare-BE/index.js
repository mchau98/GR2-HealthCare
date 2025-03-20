require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const sequelize = require("./config/dbConfig");
const authRoute = require("./routes/authRoute");
const app = express();
const port = process.env.PORT || 8080;
const caloRoute = require("./routes/caloRoute");
const postsRoute = require("./routes/postsRoute");
const {crawlLinks} = require("./crawlData/crawlBlog")

app.use(express.json());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.status(200).json({});
  }
  next();
});

app.use("/api/v1", authRoute);
app.use("/api/v1/calo", caloRoute);
app.use("/api/v1/posts", postsRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // crawlLinks()
});
