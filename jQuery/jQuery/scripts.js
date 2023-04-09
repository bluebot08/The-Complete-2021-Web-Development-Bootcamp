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

// jQuery way

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keydown(function (event) {
  console.log(event.key);
});

$("body").keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

$("h1").after("<h2>Mouse over me to get rid of all these buttons!</h2>");

$("h2").on("mouseover", function () {
  $("button").remove();
});

$("h1").before("<button class = remove >Click Me To Hide or Show h1!</button>");

// $(".remove").on("click", function () {
//   $("h1").hide();
// });

$(".remove").on("click", function () {
  $("h1").fadeToggle();
});

$(".remove").after("<button class = slide >Click Me to Slide</button>");

$(".slide").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
