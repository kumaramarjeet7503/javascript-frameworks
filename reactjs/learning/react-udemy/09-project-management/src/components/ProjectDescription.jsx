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

    
function removeTaskToList(task){

  console.log("this is to remove tsk "+task)
    let taskIndex = -1 
        taskList.forEach((currTask,index)=>{
                if(currTask == task) taskIndex = index
        })
        addTask((prevTask) => {
          //  return  [...prevTask.slice(0,index),...prevTask.slice(index+1)]
          console.log("task index :"+taskIndex)
          
          return [...prevTask.slice(0,taskIndex),...prevTask.slice(taskIndex+1)]
          } )
          console.log("task list :"+taskList)
          setTaskName("")
    }

// }

  return (
    <div className="w-[80%] mx-auto my-10 ">
      <div className="flex justify-between py-1">
        <h2 className="font-bold text-2xl">{projectObj.title}</h2>
        <button onClick={()=>handleDelete(projectObj)}>Delete</button>
      </div>
      <p >{projectObj.dueDate}</p>
      <p className="py-3" >{projectObj.description}</p>
      <hr></hr>
   
      <Task  addTaskToList={addTaskToList} taskName={taskName} setTaskName={setTaskName}  handleTaskClearance={removeTaskToList}  taskList={taskList} ></Task>
      
    </div>
  );
}
