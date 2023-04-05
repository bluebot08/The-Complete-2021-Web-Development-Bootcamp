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
  //   if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
  //     leapYear = true;
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
