import { useState } from 'react';
import Task from './Task.jsx'
import Button from './Button.jsx'

export default function ProjectDescription({ projectState,handleProjectDeletion,handleAddTask,handleTaskClearance}) {

 const project = projectState.projects.filter(proj=>  proj.id === projectState.selectedProjectId)[0]

  return (
    <div className="w-[80%] mx-auto my-10 ">
      <div className="flex justify-between py-1">
        <h2 className="font-bold text-2xl">{project.title}</h2>
        <Button data-key={project.id} onClick={handleProjectDeletion} >Delete</Button>
      </div>
      <p >{project.dueDate }</p>
      <p className="py-3" >{project.description}</p>
      <hr></hr>
      <Task tasks={project.tasks} projectId={project.id} handleAddTask={handleAddTask} handleTaskClearance={handleTaskClearance} ></Task>
      
    </div>
  );
}
