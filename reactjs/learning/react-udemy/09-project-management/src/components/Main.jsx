import NewProject from "./NewProject";
import {useState} from 'react'
import ProjectDescription  from "./ProjectDescription.jsx";
import Index from "./Index.jsx"
export default function Main({handleClick,showIndex,showCreate,addProject,projectObj,handleDelete}) {
  return (
    <main id="main" style={{width: "82vw"}} >
     {!projectObj && showIndex && < Index handleClick={()=>handleClick(null)} />}
      {!projectObj &&  showCreate && <NewProject handleClick={()=>handleClick(null)}  addProject={addProject} />}
      {projectObj && <  ProjectDescription projectObj={projectObj} handleDelete={handleDelete}  ></ProjectDescription>}
    </main>
  );
}
