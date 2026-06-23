import { useState } from 'react';
import './App.css';


function App() {
  const [num, setNum] = useState("");
  const [fact, setFact] = useState("");

  const factorial = () => {
    let f = 1;
    for (let i = 1; i <= num; i++) f *= i;
    setFact(f);
  };

  return (
    <>
    <div className="card">
      <h2>Factorial</h2>

      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number"
      />

      <button onClick={factorial}>Find</button>

      <p>{fact}</p>
    </div>
    </>
  )
}

export default App;