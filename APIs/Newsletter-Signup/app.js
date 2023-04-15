// *** Constant Require Section:

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

// *** Body Parser ***
app.use(bodyParser.urlencoded({ extended: true }));

// *** Static Folder ***
app.use("/public", express.static("public"));
// app.use("/public", express.static(path.join(__dirname, "public")));

// *** Tracking HTML File ***
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// *** Signup Route ***
app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.userEmail;

  // *** Construct Requesting data ***
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // *** Stringify inputed data ***
  const jsonData = JSON.stringify(data);

  // *** url = "https://<data center>.api.mailchimp.com/3.0/lists/{listID}";
  const url = "https://us21.api.mailchimp.com/3.0/lists/c122ac13e9";

  const options = {
    method: "POST",
    auth: "Stefan:cb91801d82758f01a1eea04122208d87-us21",
  };

  // *** Requesting and send back our data to mailchimp ***
  const request = https.request(url, options, function (response) {
    // *** Checking our code statment ***
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  // *** Showing the status code on hyper terminal ***
  request.write(jsonData);
  // *** Ending Code ***
  request.end();
});

// *** Redirecting Codes: ***

// *** from Failure page to Signup page ***
app.post("/failure", function (req, res) {
  res.redirect("/");
});
// *** from Success page to Signup page ***
app.post("/success", function (req, res) {
  res.redirect("/");
});

// *** Our Server PORT Starter ***
app.listen(3000, function () {
  console.log("Server started on port: 3000!");
});
// MailChimp API Key

// cb91801d82758f01a1eea04122208d87-us21

// List ID

// c122ac13e9

// // Set express to serve static pages and images

// app.use("/public", express.static("public"));
