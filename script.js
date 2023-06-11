function runCounter() {
  const numberofTries = parseInt(document.getElementById("numberofTries").value);
  const chancePercentage = parseFloat(document.getElementById("chancePercentage").value);
  
  let count = 0;

  function getRandomNumber() {
    return Math.random() * numberofTries;
  }

  for (let i = 0; i < numberofTries; i++) {
    if (getRandomNumber() <= chancePercentage) {
      count++;
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerText = "The " + chancePercentage + "% chance occurred " + count + " times.";
}
