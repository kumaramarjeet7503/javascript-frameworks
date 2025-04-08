import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {

  const [projectList, addProject] = useState([])
  const [taskList, addTask] = useState([])

   const [showIndex,setShowIndex] = useState(true);
      const [showCreate,setShowCreate] = useState(false);
  
      function addProjectItem(project){
        addProject(prevPrj =>{
            return [...prevPrj,project]
        })

        handleClick()
      }

      function handleClick(){
          setShowIndex(index=> !index)
          setShowCreate(create=> !create)
      }


  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar handleClick={handleClick} projectList={projectList} showIndex={showIndex} />
        < Main handleClick={handleClick}  addProject={addProjectItem} showCreate={showCreate} showIndex={showIndex}  />
      </section>
    </>
  );
}

export default App;
