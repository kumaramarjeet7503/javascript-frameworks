import NewProject from "./NewProject";
import {useState} from 'react'
import ProjectDescription  from "./ProjectDescription.jsx";
import Index from "./Index.jsx"
export default function Main({handleClick,showIndex,showCreate,addProject,projectObj}) {
  return (
    <main id="main" style={{width: "82vw"}} >
     {!projectObj && showIndex && < Index handleClick={handleClick} />}
      {!projectObj &&  showCreate && <NewProject handleClick={handleClick} addProject={addProject} />}
      {projectObj && <  ProjectDescription projectObj={projectObj}  ></ProjectDescription>}
    </main>
  );
}
