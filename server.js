"use strict";

// load modules
const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const jsonParser = require("body-parser").json;
const path = require("path");
const axios = require("axios");

// import apiKey from "./config.js";
const app = express();
// set our port

app.set("port", process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan("dev"));

app.use(jsonParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(express.static(path.join(__dirname, "client/build")));
// mongoose.connect(
//   "localhost:5000",
//   { useNewUrlParser: true }
// );
// const db = mongoose.connection;

// db.on("error", function(err) {
//   console.error("connection error:", err);
// });

// db.once("open", function() {
//   console.log("db connection successful");
// });

app.get("/badges", function(req, res) {
  axios
    .get(`https://teamtreehouse.com/joshuablasbalg.json`)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
    });
});

// uncomment this route in order to test the global error handler
app.get("/error", function(req, res) {
  throw new Error("Test error");
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found"
  });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

module.exports = server;
