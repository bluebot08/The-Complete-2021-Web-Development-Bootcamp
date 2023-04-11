const { log } = require("console");
const express = require("express");

const https = require("https");

// initialze express

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});

// const query = "Tokyo";
// const apiKey = "5ed0351a230c2fc8207ce933d27fd7be";
// const unit = "metric";
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   query +
//   "&appid=" +
//   apiKey +
//   "&units=" +
//   unit;

// https.get(url, function (response) {
//   // logging response code to see if it things are working
//   console.log(response.statusCode);

//   // saving the data
//   response.on("data", function (data) {
//     const weatherData = JSON.parse(data);
//     console.log(weatherData);

//     //   Saving specific data
//     const temp = weatherData.main.temp;
//     const feelsLikeTemp = weatherData.main.feels_like;
//     const descriptionSky = weatherData.weather[0].description;
//     const description = weatherData.weather[0].main;
//     const icon = weatherData.weather[0].icon;
//     const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//     //   Responding
//     res.write(
//       "<p>The weather is currently " +
//         description +
//         " with " +
//         descriptionSky +
//         " </p>"
//     );
//     res.write(
//       "<h1>The temperature in Miura is " +
//         temp +
//         " and feels like " +
//         feelsLikeTemp +
//         " degrees Celcius</h1>"
//     );
//     res.write("<img src=" + imageURL + ">");

//     res.send();

//   });
// });
