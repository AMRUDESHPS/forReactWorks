import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="counter-container">
        <button
          className="counter-button"
          onClick={() => {
            setCount(prev => prev - 1);
          }}
        >
          -
        </button>
        <div className="counter-display">{count}</div>
        <button
          className="counter-button"
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
