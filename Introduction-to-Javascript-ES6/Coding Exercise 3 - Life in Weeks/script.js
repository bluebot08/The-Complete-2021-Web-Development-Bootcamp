let age = prompt("How old are you?");

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var yearsRemaining = 90 - age;
  var daysRemaining = yearsRemaining * 365;
  var weeksRemaining = yearsRemaining * 52;
  var monthsRemaining = yearsRemaining * 12;

  console.log(
    `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`
  );
  alert(
    `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(age);
