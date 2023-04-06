// function fibonacciGenerator(n) {
//   //Do NOT change any of the code above 👆
//   //Write your code here:
//   let fibonacciArray = [0, 1];

//   for (let i = 2; i < n; i++) {
//     const nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
//     fibonacciArray.push(nextNumber);
//   }
//   return fibonacciArray;
//   //Return an array of fibonacci numbers starting from 0.
//   //Do NOT change any of the code below 👇
// }

// fibonacciGenerator(n);

function fibGen(n) {
  n = prompt("How many Fibonacci numbers would you like generated?");
  n = parseInt(n);
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextVal = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextVal);
  }
  alert(sequence);
}
fibGen();

// From Memory

// function fGen(n){
//   let fibSeq = [0,1]
//   for (i = 2; i < n; i++) {
//     nextNum = fibSeq[i-1] + fibSeq[i-2]
//     fibSeq.push(nextNum);
//   }
//   return fibSeq
// }
