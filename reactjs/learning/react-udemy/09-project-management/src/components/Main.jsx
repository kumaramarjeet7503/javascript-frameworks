import NewProject from "./NewProject";
import {useState} from 'react'
import Index from "./Index.jsx"
export default function Main({handleClick,showIndex,showCreate,addProject}) {
  return (
    <main id="main" style={{width: "82vw"}} >
     {showIndex && < Index handleClick={handleClick} />}
      {showCreate && <NewProject handleClick={handleClick} addProject={addProject} />}
    </main>
  );
}
