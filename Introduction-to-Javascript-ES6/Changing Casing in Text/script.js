let userName = prompt("What is your name?");

let firstLetter = userName.slice(0, 1);
let restName = userName.slice(1, userName.length);
firstLetter = firstLetter.toUpperCase();

alert("Hello, " + firstLetter + restName + ".");
