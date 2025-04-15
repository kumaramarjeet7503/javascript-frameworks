import { useState } from 'react';
import Task from './Task.jsx'

export default function ProjectDescription({ projectObj,handleDelete }) {


  const [taskList, addTask] = useState([])
  const [taskName,setTaskName] = useState("")
  
  function addTaskToList(task){
    addTask(prevTask=>{
       return   [...prevTask,task]
    });
    setTaskName((prevTaskName=> ""))
}

  return (
    <div className="w-[80%] mx-auto my-10 ">
      <div className="flex justify-between py-1">
        <h2 className="font-bold text-2xl">{projectObj.title}</h2>
        <button onClick={()=>handleDelete(projectObj)}>Delete</button>
      </div>
      <p >{projectObj.dueDate}</p>
      <p className="py-3" >{projectObj.description}</p>
      <hr></hr>
   
      <Task  addTaskToList={addTaskToList} taskName={taskName} setTaskName={setTaskName}  taskList={taskList} ></Task>
      
    </div>
  );
}
