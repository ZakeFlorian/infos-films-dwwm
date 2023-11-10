//*** fichier App.js ***
import { useState } from 'react';
import './App.css';
import Home from './Home/Home';

function App() {
  const [animation, setAnimation] = useState(true)

  const toggleAnimation = () => {
    console.log(animation)
    setAnimation(animation => !animation)
  }

  return (
    <div className="App">
      <Home animate={animation} />
      <button className="App-button" onClick={toggleAnimation}>  Modifier l’animation</button>
    </div>
  );
}

export default App;
