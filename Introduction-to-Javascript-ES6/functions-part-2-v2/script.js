let money = prompt(
  "How many dollars would you like to give the robot to buy milk. One gallon of milk is $1.5."
);

let milkBought = Math.floor(money / 1.5);

function getMilk(money) {
  console.log("The robot bought " + milkBought + " bottles of milk.");
}

getMilk(money);

alert(`The robot bought ${milkBought} bottles of milk`);
