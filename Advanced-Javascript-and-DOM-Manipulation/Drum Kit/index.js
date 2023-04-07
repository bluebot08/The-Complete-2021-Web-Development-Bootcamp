// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });

// My solution
// let buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     alert("I got clicked!");
//   });
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}

// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();
