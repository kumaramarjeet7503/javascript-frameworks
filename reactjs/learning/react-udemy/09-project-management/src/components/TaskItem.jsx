export default function TaskItem({task, handleTaskClearance}){
    return <div className="flex justify-between">
        <p >{task}</p>
        <button onClick={()=>handleTaskClearance(task)} >Clear</button>
        </div>
}