var output = [];

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  console.log(output);
}

fizzBuzz();

// Angela Yu solution

// var output = []
// var count = 1

// function fizzBuzz(){

//     output.push(count)
//     count++
//     console.log(output)
// }
