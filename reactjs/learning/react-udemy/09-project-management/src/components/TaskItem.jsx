export default function TaskItem({task, handleTaskClearance,projectTitle}){
    return <div className="flex justify-between">
        <p >{task}</p>
        <button onClick={()=>handleTaskClearance(task,projectTitle)} >Clear</button>
        </div>
}