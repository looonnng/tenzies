import Die from './Die';
import Info from './Info';

export default function Tenzie() {
  return (
    <div className="tenzies flex-center">
      <Info />
      <div className="dice-wrapper">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={7} />
        <Die value={8} />
        <Die value={9} />
        <Die value={1} />
      </div>
      <button className='roll-btn'>Roll</button>
    </div>
  );
}
