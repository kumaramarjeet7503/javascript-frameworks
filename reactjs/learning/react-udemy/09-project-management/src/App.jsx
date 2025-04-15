import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {

  const [projectList, addProject] = useState([])

  const [projectObj,setProject] = useState(null)

   const [showIndex,setShowIndex] = useState(true);
      const [showCreate,setShowCreate] = useState(false);
  
      function addProjectItem(project){
        addProject(prevPrj =>{
            return [...prevPrj,project]
        })

        handleClick(null)
      }

      function handleClick(project = null){
      
        if(!project){
          setShowIndex(index=> !index)
          setShowCreate(create=> !create)
          setProject(null)
        }else{
          setProject((prevProj)=>{
            return {...prevProj,...project}
          })
          
        }
         
      }

      function handleDelete(projectItem){
         let index = -1;
          projectList.forEach((prj,i) => {
            if(prj.title === projectItem.title){
                index = i
            }
        });
                
        addProject((prevPrj)=>{
           return [...prevPrj.slice(0,index),...prevPrj.slice(index+1)]
        })
        setProject(null)

      }



  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar handleClick={handleClick}   projectList={projectList} showIndex={showIndex} />
        < Main handleClick={handleClick} handleDelete={handleDelete} projectObj={projectObj}  addProject={addProjectItem} showCreate={showCreate} showIndex={showIndex}  />
      </section>
    </>
  );
}

export default App;
