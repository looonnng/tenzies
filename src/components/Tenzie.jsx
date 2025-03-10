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

  return (
    <div className="tenzies flex-center">
      <Info />
      <div className="dice-wrapper">{diceElements}</div>
      <button onClick={rollDice} className="roll-btn">
        Roll
      </button>
    </div>
  );
}
