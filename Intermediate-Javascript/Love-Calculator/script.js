let firstPerson = prompt("What is the name of the first person to be matched?");

let secondPerson = prompt(
  "What is the name of the second person to be matched?"
);

function compatabilityGenerator() {
  let baseScore = Math.random();
  let modifiedScore = baseScore * 100;
  let minScore = Math.floor(modifiedScore);
  let finalScore = minScore + 1;

  if (finalScore > 70) {
    alert(
      firstPerson +
        " and " +
        secondPerson +
        " have a compatability score of " +
        finalScore +
        "%. Congrats on the match made in heaven!"
    );
  }

  if (finalScore > 30 && finalScore <= 70) {
    alert(
      firstPerson +
        " and " +
        secondPerson +
        " have a compatability score of " +
        finalScore +
        "%. Maybe someone else would be better."
    );
  }

  if (finalScore <= 30) {
    alert(
      firstPerson +
        " and " +
        secondPerson +
        " have a compatability score of " +
        finalScore +
        "%. You go together like oil and water."
    );
  }
}

compatabilityGenerator();
