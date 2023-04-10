const { log } = require("console");
const express = require("express");

const https = require("https");

// initialze express

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Miura&appid=5ed0351a230c2fc8207ce933d27fd7be&units=metric";

  https.get(url, function (response) {
    // logging response code to see if it things are working
    console.log(response.statusCode);

    // saving the data
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);

      //   Saving specific data
      const temp = weatherData.main.temp;
      const feelsLikeTemp = weatherData.main.feels_like;
      const descriptionSky = weatherData.weather[0].description;
      const description = weatherData.weather[0].main;
      res.send(
        "The temperature in Miura is " +
          temp +
          " degrees Celcius. The feels like temperature is " +
          feelsLikeTemp +
          ". The weather condtions are " +
          description +
          " with " +
          descriptionSky +
          " ."
      );
    });
  });
  // Need to remove because we can only have one res
  //   res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
