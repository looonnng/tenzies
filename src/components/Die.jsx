export default function Die(props) {
  return (
    <button onClick={() => props.hold(props.id)} className={props.isHeld ? 'dice checked-dice' : 'dice'}>
      {props.value}
    </button>
  );
}
