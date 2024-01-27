import {useState} from "react";
import './App.css';

function App() {
  const [countLaps, setCountLaps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerID, setTimerID] = useState(null);

  const startCounterHandler = () => {
    if(!isRunning){
      const timerId = () => {
        setCountLaps((prvBar) => prvBar+1);
        setTimerID(setTimeout(timerId, 1000));
      }
      timerId();
    }else{

      clearInterval(timerID);
    }
    setIsRunning(!isRunning);
    console.log("I am running");
  };

  const restChangeHandler = () => {
    clearInterval(timerID);
    setCountLaps(0);
    console.log("reset all");
  };

  return (
    <div className="App">
      <button>{!isRunning? 'Play All': 'Resume'}</button>
      <button onClick={restChangeHandler}>Rest All</button>
        <div className="outer-container">
          <div>{countLaps}</div>
          <button onClick={startCounterHandler}>{!isRunning ? 'Start':'Pause'}</button>
        </div>
    </div>
  );
}

export default App;
