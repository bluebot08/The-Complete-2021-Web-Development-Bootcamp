function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.
  let leapYear = false;

  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    leapYear = true;
  }

  if (year % 4 == 0 && year % 100 != 0) {
    leapYear = true;
  }

  //   angela Yu solution

  //   if (year % 4 === 0) {
  //     if (year % 100 === 0 ) {
  //         if (year % 400 === 0 ) {
  //             return "Leap Year"
  //         }
  //         else{
  //             return "Not leap year."
  //         }
  //     }
  //     else {
  //         return "Leap Year"
  //     }
  //   } else {
  //     return "Not leap year."
  //   }

  /**************Don't change the code below****************/
}

isLeap(2016);

// Most simple solution

// function isLeap(year) {

//     if (year % 4 !==0 || year % 100 === 0 && year % 400 !== 0) {

//         console.log("Not leap year.");

//     } else {

//         console.log("Leap year.");

//     }

//     }
