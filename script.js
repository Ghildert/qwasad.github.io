function chanceSimulator(tries, chance) {
    const tries = parseInt(document.getElementById("numberofTries").value);
    const mins = parseInt(document.getElementById("minsStage").value)
    const chance = parseFloat(document.getElementById("chancePercentage").value);

    let stage = 0;
    let outcome = [];
  
    for (let i = 0; i < tries; i++) {
      if (Math.random() < chance) {
        stage++;
        outcome.push(i + 1);
      }
    }
  
    return {
      stage: stage,
      outcome: outcome
    };

    
}

const result = chanceSimulator(tries, chance);
const convChance = chance * 100
const clear = (tries * mins) / 60

const resultElement = document.getElementById("result");
resultElement.innerText = `Your chance is: ${convChance}% \n Obtained in: ${result.outcome.join(", ")}. ---That's a total of ${result.stage} stage(s) \n It took ${clear} hours to complete all ${tries} stage(s)`;
