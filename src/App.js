import {useState} from "react";
import './App.css';

function App() {
  const [countLaps, setCountLaps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startCounterHandler = () => {
    const timerId = setInterval(() => {
      setCountLaps((prvBar) => prvBar+1);
      
    }, 1000);
    setIsRunning(true);
    return () => clearInterval(timerId);
  };

  const pauseCounter = () => {
    
  };
   
  return (
    <div className="App">
        <div className="outer-container">
          <div>{countLaps}</div>
          <button onClick={startCounterHandler}>{!isRunning ? 'Start':'Pause'}</button>
        </div>
    </div>
  );
}

export default App;
