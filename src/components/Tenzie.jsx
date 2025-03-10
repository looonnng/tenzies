import Die from './Die';
import Info from './Info';
import { getRandomDie, getAllNewDice } from '../getAllNewDice';
import { useState } from 'react';

export default function Tenzie() {
  const [dice, setDice] = useState(getAllNewDice());
  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  ));

  const isGameWon =
    dice.every((die) => die.value === dice[0].value) &&
    dice.every((die) => die.isHeld);

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: getRandomDie() },
      ),
    );
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function restart() {
    setDice(getAllNewDice());
  }

  return (
    <div className="tenzies flex-center">
      <Info />
      <div className="dice-wrapper">{diceElements}</div>
      <button onClick={isGameWon ? restart : rollDice} className="roll-btn">
        {isGameWon ? 'New Game' : 'Roll'}
      </button>
    </div>
  );
}
