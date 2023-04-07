let num1 = prompt("What is the first number?");
let num2 = prompt("What is the second number?");
let operator = prompt(
  "What operator would you like? Add, subtract, multiply, divide?"
);

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(num1, num2, operator);
