let userName = prompt("What is your name?");

let firstLetter = userName.slice(0, 1);
let restName = userName.slice(1, userName.length);
firstLetter = firstLetter.toUpperCase();
restName = restName.toLocaleLowerCase();

alert("Hello, " + firstLetter + restName + ".");
