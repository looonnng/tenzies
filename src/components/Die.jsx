export default function Die(props) {
  return (
    <button
      aria-label={`Die with value ${props.value}`}
      aria-pressed={props.isHeld}
      onClick={() => props.hold(props.id)}
      className={props.isHeld ? 'dice checked-dice' : 'dice'}
    >
      {props.value}
    </button>
  );
}
