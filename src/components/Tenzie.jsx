import Die from './Die';
import Info from './Info';
import { getRandomDie, getAllNewDice } from '../getAllNewDice';
import { useState } from 'react';

export default function Tenzie() {
  const [dice, setDice] = useState(getAllNewDice());
  const [isGameWon, setIsGameWon] = useState(false);

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  ));

  function checkGameWon() {
    setIsGameWon(
      dice.every((die, index, arr) => die.value === arr[0]['value']),
    );
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: getRandomDie() },
      ),
    );
  }

  function newGame() {
    setDice(getAllNewDice());
    setIsGameWon(false);
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );

    checkGameWon();
  }

  return (
    <div className="tenzies flex-center">
      <Info />
      <div className="dice-wrapper">{diceElements}</div>
      <button onClick={isGameWon ? newGame : rollDice} className="roll-btn">
        {isGameWon ? 'New Game' : 'Roll'}
      </button>
    </div>
  );
}
