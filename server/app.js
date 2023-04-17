const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const cors = require("cors");

//body parser
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // allow cross origin resource sharing
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

// import routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

//it is for error handling
app.use(ErrorHandler);

module.exports = app;
