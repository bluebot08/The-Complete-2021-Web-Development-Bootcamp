function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  //Write your code here:
  let fibonacciArray = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextNumber);
  }
  return fibonacciArray;
  //Return an array of fibonacci numbers starting from 0.
  //Do NOT change any of the code below 👇
}

fibonacciGenerator(n);
