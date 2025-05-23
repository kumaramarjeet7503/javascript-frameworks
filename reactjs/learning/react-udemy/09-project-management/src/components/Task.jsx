
import TaskItem  from "./TaskItem"
import Button from './Button.jsx'
import { useRef } from "react"
import Input from "./Input"

export default function Task({tasks,handleAddTask,projectId}){

    const taskName = useRef()

    function addTask(){
        handleAddTask(taskName.current.value,projectId)
        taskName.current.value = ""
    }



    return <div className="py-5">
    <h2 className="font-bold text-xl">Tasks</h2>
   
      <div className="flex">
        <Input  ref={taskName} type="text"  className="bg-gray-300 border-t-0 p-1 my-2"></Input>
        <Button  onClick={addTask}  className="px-2">Add Task</Button>
      </div>                                                    
        { tasks.map((task,index)=>{
          return <p key={index}>{task}</p>
          // return <TaskItem key={task} task={task} projectTitle={projectTitle} handleTaskClearance={removeTaskToList}  ></TaskItem> 
        })  }
    
  </div>
}