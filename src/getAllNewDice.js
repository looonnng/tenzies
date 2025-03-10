function getRandomDie() {
  return Math.ceil(Math.random() * 6);
}

function getAllNewDice() {
  /*

  let randomDieNums = [];
  for (let i = 10; i > 0; i--) {
    randomDieNums.push(getRandomNum(1, 6));
  }
  return randomDieNums;

  */

  return new Array(10).fill(0).map(() => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: crypto.randomUUID(),
  }));
}

export { getRandomDie, getAllNewDice };
