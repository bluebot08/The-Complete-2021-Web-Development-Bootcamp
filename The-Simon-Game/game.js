// alert("This is a test");

// Create arrays

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  // Changing information
  level = level + 1;
  $("h1").text("Level " + level);

  // Generate random number
  let randomNumber = Math.floor(Math.random() * 4);

  //   Use number to choose color and push it to gamePatter array
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(randomNumber);
  console.log(randomChosenColor);

  //   My soution
  //   flashing button animation
  //   let selectedButton = $("." + randomChosenColor);
  //   $(selectedButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  //   console.log(selectedButton);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

//   Detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  playSound(userChosenColor);

  animatePress(userChosenColor);
});

function playSound(name) {
  //   create audio and play

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animating Button Press

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

let gameStart = false;

$(document).one("keydown", function () {
  nextSequence();
});

let level = 0;
