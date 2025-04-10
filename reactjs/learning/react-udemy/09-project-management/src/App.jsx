import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {

  const [projectList, addProject] = useState([])
  const [taskList, addTask] = useState([])
  const [projectObj,setProject] = useState(null)

   const [showIndex,setShowIndex] = useState(true);
      const [showCreate,setShowCreate] = useState(false);
  
      function addProjectItem(project){
        addProject(prevPrj =>{
            return [...prevPrj,project]
        })

        handleClick()
      }

      function handleClick(project = null){
      
        if( 'target' in project){
          setShowIndex(index=> !index)
          setShowCreate(create=> !create)
        }else{
          setProject((prevProj)=>{
            return {...prevProj,...project}
          })
          
        }
         
      }



  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar handleClick={handleClick}  projectList={projectList} showIndex={showIndex} />
        < Main handleClick={handleClick} projectObj={projectObj}  addProject={addProjectItem} showCreate={showCreate} showIndex={showIndex}  />
      </section>
    </>
  );
}

export default App;
