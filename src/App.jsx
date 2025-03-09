import './App.css';

function App() {
  return (
    <>
      <div className="container flex-center">
        <div className="tenzies-wrapper flex-center">
          <div className="tenzies flex-center">
            <div className="info">
              <h1>Tenzies</h1>
              <p>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
              </p>
            </div>
            <div className="dice-wrapper">
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
              <div className="dice"></div>
            </div>
            <button>Roll</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
