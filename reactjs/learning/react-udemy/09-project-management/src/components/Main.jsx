import NewProject from "./NewProject";
import {useState} from 'react'
import ProjectDescription  from "./ProjectDescription.jsx";
import Index from "./Index.jsx"
// export default function Main({handleClickForProject,showIndex,showCreate,addProject,
//    projectObj,handleDelete, handleTaskInput,removeTaskToList,addTaskToList,taskList, taskName}) {

export default function Main({handleNewProject, projectState, handleAddProject}) {


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
      {/* {projectObj && <  ProjectDescription  handleTaskInput={handleTaskInput} taskName={taskName} taskList={prjTaskList} removeTaskToList={removeTaskToList} addTaskToList={addTaskToList} projectObj={projectObj} handleDelete={handleDelete}  ></ProjectDescription>} */}
    </main>
  );
}
