// Install express.js

const express = require("express");

// Install bodyParser

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log(req.body.num1);
  //   res.send("Thanks for posting that!");

  //   getting values of num1 and num2

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  //   calulation

  var result = num1 + num2;
  res.send(
    "The result of adding " + num1 + " and " + num2 + " is " + result + "."
  );
});
