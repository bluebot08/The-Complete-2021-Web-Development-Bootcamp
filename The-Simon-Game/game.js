// alert("This is a test");

// Create arrays

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  // Generate random number
  let randomNumber = Math.floor(Math.random() * 4);

  //   Use number to choose color and push it to gamePatter array
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(randomNumber);
  console.log(randomChosenColor);

  //   flashing button animation
  let selectedButton = $("." + randomChosenColor);
  $(selectedButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(selectedButton);

  //   create audio and play
}

nextSequence();
