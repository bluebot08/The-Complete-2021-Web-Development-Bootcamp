const express = require("express");

const app = express();

// app.get("/", function (request, response) {
//   //   console.log(request);
//   //   response.send("Hello");
//   response.send("<h1>Hello, World!</h1>");
// });

// Most use req and res instead of request and response

app.get("/", function (req, res) {
  //   console.log(request);
  //   response.send("Hello");
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: oneil.stefan@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "Hi, I'm Stefan! After taking a year-long break to help raise my child 👶🏼, I'm excited to be back and ready to dive into my passions for movies 🎥, music 🎵, games 🎮, and technology 💻. I'm particularly interested in creating websites that enhance people's enjoyment of these areas. If you want to reach me, the best way is to email me at oneil.stefan@gmail.com I'm looking forward to connecting with you!"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("I love movies!");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
