document.getElementById("runButton").addEventListener("click", runSimulator);

function runSimulator() {
  const tries = parseInt(document.getElementById("tries").value);
  const mins = parseInt(document.getElementById("minsStage").value);
  const chance = parseFloat(document.getElementById("chance").value);

  let stage = 0;
  let outcome = [];

  for (let i = 0; i < tries; i++) {
    if (Math.random() < chance) {
      stage++;
      outcome.push(i + 1);
    }
  }

  const convChance = chance * 100;
  const clear = (tries * mins) / 60;

  const resultElement = document.getElementById("result");
  resultElement.innerText = `Your chance is: ${convChance}%\nObtained in: ${outcome.join(", ")}. ---That's a total of ${stage} stage(s).\nIt took ${clear} hours to complete all ${tries} stage(s).`;
}
