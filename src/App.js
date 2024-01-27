import {useState} from "react";
import './App.css';

function App() {
  const [countLaps, setCountLaps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerID, setTimerID] = useState(null);

  const startCounterHandler = () => {
    if(!isRunning){
    console.log(isRunning);
      const timerId = setInterval(() => {
        setCountLaps((prvBar) => prvBar+1);
        
      }, 1000);
      setTimerID(timerId);
    }else{

      clearInterval(timerID);
    }
    setIsRunning(!isRunning);
    console.log("I am running");
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
