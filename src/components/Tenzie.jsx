import Die from './Die';
import Info from './Info';
import { getRandomDie, getAllNewDice } from '../getAllNewDice';
import { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

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

  function checkGameWon() {
    setIsGameWon(
      dice.every((die, index, arr) => die.value === arr[0]['value']),
    );
  }

  function rollDice() {
    if (isGameWon) {
      setDice(getAllNewDice());
    }

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
      <button onClick={rollDice} className="roll-btn">
        Roll
      </button>
    </div>
  );
}
