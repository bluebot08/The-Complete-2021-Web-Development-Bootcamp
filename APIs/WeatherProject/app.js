const express = require("express");

const https = require("https");

// initialze express

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Miura&appid=5ed0351a230c2fc8207ce933d27fd7be&units=metric";

  https.get(url, function (response) {
    console.log(response);
  });

  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
