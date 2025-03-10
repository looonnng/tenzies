export default function Die(props) {
  return (
    <button className="dice flex-center">
      <span>{props.value}</span>
    </button>
  );
}
