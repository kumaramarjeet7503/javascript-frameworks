import { useEffect, useState } from "react"

export default function QuestionTimer({timeout,onTimeout}){
    const [remainingTime,setRemainingTime] = useState(timeout)
     useEffect(()=>{
      const timer =  setTimeout(onTimeout,timeout)
      setRemainingTime(timeout)
    return ()=>{
            clearTimeout(timer)
        }
    }
    ,[onTimeout,timeout])
    useEffect(()=>{
         const interval = setInterval(()=>{
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        return ()=>{
            clearInterval(interval)
        }
    },100)},[])
    return <progress max={timeout} value={remainingTime} ></progress>
}