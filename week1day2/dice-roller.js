var times_rolled = process.argv.slice(2);

function diceRolls(times_rolled) {
  var result = [];
  var rollsLeft = times_rolled;
  while (rollsLeft > 0) {
    result.push(rollDice());
    rollsLeft--;
  }
  return result;
}

function rollDice() {
  return Math.round(Math.random() * 5 + 1);
}

console.log("Rolled " + times_rolled + ": ")
console.log(diceRolls(times_rolled));
