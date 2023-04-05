const names = ["Stefan", "Yoshie", "Dad", "Melissa"];
let poolSize;
let randomNumber;

function whosPaying(names) {
  /******Don't change the code above*******/
  //Write your code here.
  poolSize = names.length;
  randomNumber = Math.floor(Math.random() * poolSize);

  alert(
    `${names[randomNumber]} is going to buy lunch today!`
  ); /******Don't change the code below*******/
}

whosPaying(names);
