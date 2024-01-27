import {useState} from "react";
import './App.css';

function App() {
  const [countLaps, setCountLaps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlayAllRunning, setIsPlayAllRunning] = useState(false);
  const [timerID, setTimerID] = useState(null);

  const startCounterHandler = (e) => {
    const buttonName= e.target.name;
    console.log(buttonName);
    console.log(isPlayAllRunning);
    console.log("isRunning", isRunning);
    const timerId = () => {
      setCountLaps((prvBar) => prvBar+1);
      setTimerID(setTimeout(timerId, 1000));
    }
    if((!isRunning && buttonName === 'singlePlayButton')){
      timerId();
      console.log("I am running");
    }
    if(!isPlayAllRunning && buttonName === "playAllButton"){
      timerId();
      console.log("Is running all");
      setIsPlayAllRunning(!isPlayAllRunning);
    }
    else{
      
      clearInterval(timerID);
    }
    setIsRunning(!isRunning);
  };

  const resetChangeHandler = () => {
    clearInterval(timerID);
    setCountLaps(0);
    console.log("reset all");
  };

  return (
    <div className="App">
      <button name="playAllButton" onClick={startCounterHandler}>{!isPlayAllRunning? 'Play All': 'Resume'}</button>
      <button onClick={resetChangeHandler}>Reset All</button>
        <div className="outer-container">
          <div>{countLaps}</div>
          <button onClick={startCounterHandler} name="singlePlayButton">{!isRunning ? 'Start':'Pause'}</button>
        </div>
    </div>
  );
}

export default App;
