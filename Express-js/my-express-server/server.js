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
  response.send("<h1>Hello, World!</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
