// Install Modules

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// initialze express

const app = express();

// Set express to serve static pages and images

app.use("/public", express.static("public"));

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

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.userEmail;

  console.log(firstName);
  console.log(lastName);
  console.log(email);

  const data = {
    members: [
      {
        email_adress: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
});

// MailChimp API Key

// 9577d0b0fdfbcd75459a39c938862061-us21

// List ID

// c122ac13e9
