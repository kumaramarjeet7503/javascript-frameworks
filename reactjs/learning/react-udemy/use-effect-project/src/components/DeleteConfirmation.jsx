import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const DELETE_TIMER = 3000
  const [remainingTime,setRemainingTime] = useState(DELETE_TIMER)

  useEffect(()=>{
      const interval = setInterval(()=>{
        console.log("START INTERVAL")
          setRemainingTime(prevTime => prevTime - 10)
      },10)
      return ()=>{
        console.log("CLEAR INTERVAL")
        clearInterval(interval)
      }
  },[])

  useEffect(() => { 
   const timer =  setTimeout(() => {
    console.log("TIMER STARTED")
      onConfirm();
    }, DELETE_TIMER);
    // This function will executes when the component dismounts from the DOM ok
    return ()=>{
      console.log("TIMER CLEANED")
        clearTimeout(timer)
    }
  },[onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={DELETE_TIMER} />
    </div>
  );
}
