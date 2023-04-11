// Install Modules

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");
client.setConfig({
  apiKey: "cb91801d82758f01a1eea04122208d87-us21",
  server: "us21",
});

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

  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(email);

  //Javascript Object
  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

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

  const run = async () => {
    const response = await client.lists.addListMember("c122ac13e9", {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });
    console.log(response); // (optional)
  };
  //Converting object into JSON

  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/c122ac13e9";

  const options = {
    method: "POST",
    auth: "Stefan08:cb91801d82758f01a1eea04122208d87-us21",
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end;
  run();
});

// MailChimp API Key

// cb91801d82758f01a1eea04122208d87-us21

// List ID

// c122ac13e9
