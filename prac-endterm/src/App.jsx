import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  const [fact, setFact] = useState(0);

  const factorial = () => {
    let f = 1;
    for (let i = 1; i <= num; i++) f *= i;
    setFact(f);
  };

  return (
    <>
      <div className="card">
        <h2>Factorial Calculator</h2>

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

export default App
