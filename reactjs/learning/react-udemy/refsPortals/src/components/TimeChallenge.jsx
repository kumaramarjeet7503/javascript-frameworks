import { useRef, useState } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimeChallenge({title,targetTime}){



    // const timerActive = timeRemaining > 0 

    const timer = useRef() ;
    const dialog = useRef() ;

    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000)

    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000 ;

    if(timeRemaining <= 0 ){
        clearTimeout(timer.current)
        dialog.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            console.log("inside start")
            setTimeRemaining((remainingTime => remainingTime - 10))
        },10);
    }

    function handleStop(){
        clearTimeout(timer.current)
        dialog.current.open()
    }

    return <>
    { <ResultModal timeRemains={timeRemaining} onReset={handleReset} ref={dialog}  targetTime={targetTime} ></ResultModal>}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime.length > 1 ? "s" : ""}
        </p>
        <button onClick={isTimerActive ? handleStop  : handleStart}> {isTimerActive ? "Stop" : "Start" } Challenge</button>
        <p className="">
            {isTimerActive ? "Timer is running..." : "Timer inactive"}
        </p>
    </section>
    </> 
}