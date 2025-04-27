import { useState } from "react"
import TaskItem  from "./TaskItem"

export default function Task({addTaskToList,taskList,taskName,setTaskName,handleTaskClearance}){

 

    function handleTaskInput(e){
        setTaskName(prevTask=> e.target.value  )
    }
    

    return <div className="py-5">
    <h2 className="font-bold text-xl">Tasks</h2>
   
      <div className="flex">
        <input value={taskName} onChange={(e)=>handleTaskInput(e)} className="bg-gray-300 border-t-0 p-1 my-2"></input>
        <button onClick={()=>addTaskToList(taskName)}  type="submit" className="px-2">Add Task</button>
      </div>
        { taskList.map((task)=>{
            return <TaskItem key={task} task={task} handleTaskClearance={handleTaskClearance}  ></TaskItem> 
        })  }
    
  </div>
}