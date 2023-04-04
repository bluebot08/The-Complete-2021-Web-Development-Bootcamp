let firstPerson = prompt("What is the name of the first person to be matched?");

let secondPerson = prompt(
  "What is the name of the second person to be matched?"
);

function compatabilityGenerator() {
  let baseScore = Math.random();
  let modifiedScore = baseScore * 100;
  let minScore = Math.floor(modifiedScore);
  let finalScore = minScore + 1;
  alert(
    firstPerson +
      " and " +
      secondPerson +
      " have a compatability score of " +
      finalScore +
      "%"
  );
}

compatabilityGenerator();
