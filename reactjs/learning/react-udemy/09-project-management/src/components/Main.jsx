import NewProject from "./NewProject";
import {useState} from 'react'
import ProjectDescription  from "./ProjectDescription.jsx";
import Index from "./Index.jsx"
// export default function Main({handleClickForProject,showIndex,showCreate,addProject,
//    projectObj,handleDelete, handleTaskInput,removeTaskToList,addTaskToList,taskList, taskName}) {

export default function Main({handleNewProject, projectState, handleAddProject, handleProjectDeletion,handleAddTask,handleTaskClearance}) {


    // let prjTaskList = []
    // if(projectObj){
    //   console.log(taskList)
    //   prjTaskList =  taskList[projectObj.title]
    //   console.log(prjTaskList)
    // }

  return (
    <main id="main" style={{width: "82vw"}} >
     { projectState.selectedProjectId === undefined  && < Index handleNewProject={handleNewProject}  />}
      {projectState.selectedProjectId === null && <NewProject handleAddProject={handleAddProject} handleNewProject={handleNewProject}  />}
      {projectState.selectedProjectId && <  ProjectDescription handleAddTask={handleAddTask}
            handleProjectDeletion={handleProjectDeletion} projectState={projectState} handleTaskClearance={handleTaskClearance} ></ProjectDescription>}
    </main>
  );
}
