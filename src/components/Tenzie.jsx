import Die from './Die';
import Info from './Info';
import getAllNewDice from '../getAllNewDice';
import { useState } from 'react';

export default function Tenzie() {
  const [dice, setDice] = useState(getAllNewDice());

  return (
    <div className="tenzies flex-center">
      <Info />
      <div className="dice-wrapper">
        <Die value={dice[0]} />
        <Die value={dice[1]} />
        <Die value={dice[2]} />
        <Die value={dice[3]} />
        <Die value={dice[4]} />
        <Die value={dice[5]} />
        <Die value={dice[6]} />
        <Die value={dice[7]} />
        <Die value={dice[8]} />
        <Die value={dice[9]} />
      </div>
      <button className="roll-btn">Roll</button>
    </div>
  );
}
