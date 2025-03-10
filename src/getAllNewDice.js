function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export default function getAllNewDice() {
  let randomDieNums = [];
  for (let i = 10; i > 0; i--) {
    randomDieNums.push(getRandomNum(1, 6));
  }
  return randomDieNums;
}
