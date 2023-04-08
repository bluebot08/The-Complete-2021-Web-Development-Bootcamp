// $("h1").css("color", "red");

$("h1").addClass("big-title margin-50");
$("h1").text("Good Bye!");

// $("button").text("Don't Click Me!");
$("button").html("<em>Don't Click Me!</em>");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// Old way to add event listener to multiple buttons.

// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
