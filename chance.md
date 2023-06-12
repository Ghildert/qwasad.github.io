<!DOCTYPE html>
<html>
<head>
  <title>Chance Simulator</title>
  <script>
    let chance = 0.005;
    let tries = 100;
    let percent = chance * 100;

    function chanceSimulator() {
      let eventProbability = chance;

      let count = 0;
      let eventOccurrences = [];

      for (let i = 0; i < tries; i++) {
        const randomNum = Math.random(); 

        if (randomNum < eventProbability) {
          count++;
          eventOccurrences.push(i + 1);
        }
      }

      return {
        count,
        eventOccurrences,
      };
    }

    function simulate() {
      const result = chanceSimulator();
      const resultDiv = document.getElementById("result");

      resultDiv.innerHTML = `Item chance is: ${percent}% | Out of ${tries}, only ${result.count} times occurred.<br>`;
      resultDiv.innerHTML += `Lucky number: ${result.eventOccurrences.join(", ")}`;
    }
  </script>
</head>
<body>
  <h1>Chance Simulator</h1>
  <button onclick="simulate()">Simulate</button>
  <div id="result"></div>
</body>
</html>
