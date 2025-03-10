import Die from './Die';
import Info from './Info';
import { getRandomDie, getAllNewDice } from '../getAllNewDice';
import { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default function Tenzie() {
  const { width, height } = useWindowSize();
  const [dice, setDice] = useState(() => getAllNewDice());
  const rollAndNewGameBtn = useRef(null);
  const isGameWon =
    dice.every((die) => die.value === dice[0].value) &&
    dice.every((die) => die.isHeld);

  useEffect(() => {
    if (isGameWon) {
      rollAndNewGameBtn.current.focus();
    }
  }, [isGameWon]);

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
    if (isGameWon) {
      setDice(getAllNewDice());
    }

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
    <>
      {isGameWon && <Confetti width={width} height={height}></Confetti>}
      <div aria-live="polite">
        {isGameWon && (
          <p className="sr-only">
            Congratulations! You won! Press "New Game" to start again.
          </p>
        )}
      </div>
      <div className="tenzies flex-center">
        <Info />
        <div className="dice-wrapper">{diceElements}</div>
        <button onClick={rollDice} className="roll-btn" ref={rollAndNewGameBtn}>
          {isGameWon ? 'New Game' : 'Roll'}
        </button>
      </div>
    </>
  );
}
