// My Solution

// function randomNumGen() {
//   // first number
//   let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//   if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   }
//   if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   }
//   if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   }
//   if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   }
//   if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   }
//   if (randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   }
//   // second Number
//   let randomNumber2 = Math.floor(Math.random() * 6) + 1;
//   if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//   }
//   if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//   }
//   if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//   }
//   if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//   }
//   if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//   }
//   if (randomNumber2 === 6) {
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//   }

//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
//   }
//   if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
//   }
//   if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }

//   console.log(randomNumber1);
//   console.log(randomNumber2);
// }

// randomNumGen();

// Refactored

// function randomNumGen() {
//     // dice images
//     const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

//     // first number
//     let randomNumber1 = Math.floor(Math.random() * 6);
//     document.querySelector(".img1").setAttribute("src", "images/" + diceImages[randomNumber1]);

//     // second number
//     let randomNumber2 = Math.floor(Math.random() * 6);
//     document.querySelector(".img2").setAttribute("src", "images/" + diceImages[randomNumber2]);

//     // update heading based on winner
//     if (randomNumber1 > randomNumber2) {
//       document.querySelector("h1").innerHTML = "Player 1 Wins!";
//     } else if (randomNumber1 < randomNumber2) {
//       document.querySelector("h1").innerHTML = "Player 2 Wins!";
//     } else {
//       document.querySelector("h1").innerHTML = "Draw!";
//     }

//     console.log(randomNumber1);
//     console.log(randomNumber2);
//   }

//   randomNumGen();

// Angela Yu Solution

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

console.log(randomNumber1);
console.log(randomNumber2);
