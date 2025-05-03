
import TaskItem  from "./TaskItem"

export default function Task({handleTaskInput,removeTaskToList,addTaskToList,taskList,taskName,projectTitle}){



    return <div className="py-5">
    <h2 className="font-bold text-xl">Tasks</h2>
   
      <div className="flex">
        <input value={taskName} onChange={(e)=>handleTaskInput(e)} className="bg-gray-300 border-t-0 p-1 my-2"></input>
        <button onClick={()=>addTaskToList(taskName,projectTitle)}  type="submit" className="px-2">Add Task</button>
      </div>
        { taskList.map((task)=>{
          return <TaskItem key={task} task={task} projectTitle={projectTitle} handleTaskClearance={removeTaskToList}  ></TaskItem> 
        })  }
    
  </div>
}