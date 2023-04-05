function bottlesOfBeer() {
  let count = 99;
  while (count <= 99 && count >= 1) {
    console.log(
      count + " bottles of beer on the wall, " + count + " bottles of beer."
    );
    count--;
    console.log(
      "Take one down and pass it around, " +
        count +
        " bottles of beer on the wall."
    );
  }
}

bottlesOfBeer();
