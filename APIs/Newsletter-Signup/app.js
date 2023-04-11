// Install Modules

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// initialze express

const app = express();

// initialze body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// Set express to listen to port 3000 with message

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});

// Functions

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
