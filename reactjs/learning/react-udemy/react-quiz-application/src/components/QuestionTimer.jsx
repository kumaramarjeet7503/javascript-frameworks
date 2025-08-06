import { useEffect, useState } from "react"

export default function QuestionTimer({timeout,onTimeout}){
    const [remainingTime,setRemainingTime] = useState(timeout)
     useEffect(()=>{
        console.log("TIMER STARTED")
      const timer =  setTimeout(onTimeout,timeout)
      setRemainingTime(timeout)
    return ()=>{
        console.log("TIMER CLEARED")
            clearTimeout(timer)
        }
    }
    ,[onTimeout,timeout])
    useEffect(()=>{
        console.log("INTERVAL STARTED")
         const interval = setInterval(()=>{
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
    },100)
    return ()=>{
                    console.log("INTERVAL CLEARED")
            clearInterval(interval)
        }
},[])
    return <progress max={timeout} value={remainingTime} ></progress>
}