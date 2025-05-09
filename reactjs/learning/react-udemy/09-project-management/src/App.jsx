import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useRef } from "react";
import Modal from "./components/Modal.jsx";

function App() {



  // //  For project
  // // const [projectList, addProject] = useState([])
  // const [prjTaskList,setPrjTaskList] = useState({})
  // const [projectObj,setProject] = useState(null)
  //  const [showIndex,setShowIndex] = useState(true);
  //     const [showCreate,setShowCreate] = useState(false);

      const [projectState,setProjectState] = useState({
        projects:[],
        selectedProjectId:undefined
      })
 

      function handleNewProject(projectId){
        setProjectState(prevState=>  {
          return {
            ...prevState,
            selectedProjectId:projectId
          }
        })
      }

      function handleAddProject( projectData){
        const newProject = {...projectData,id:  String(Math.random().toFixed(5))}
        setProjectState(prevState=>{
          return{
            ...prevState,
            projects: [...prevState.projects,newProject]
          }
        })
      }


      function handleProjectSelection(e){
        setProjectState(prevState => {
          return{
            ...prevState,
            selectedProjectId: e.target.id
          }
        })
      }

      function handleProjectDeletion(e){
        setProjectState(prevState => {

           const updatedProjects = prevState.projects.filter(proj => proj.id !== e.target.dataset.key)
          // return prevState
          return{
            projects:updatedProjects,
            selectedProjectId: undefined
          }
        })
      }

  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar handleNewProject={handleNewProject} projectState={projectState} handleProjectSelection={handleProjectSelection}  />
        {/* < Main  taskList={prjTaskList}  handleTaskInput={handleTaskInput}  removeTaskToList={removeTaskToList} taskName={taskName} addTaskToList={addTaskToList} handleClickForProject={handleClickForProject} handleDelete={handleDelete} projectObj={projectObj}  addProject={addProjectItem} showCreate={showCreate} showIndex={showIndex}  /> */}
        <Main handleNewProject={handleNewProject} projectState={projectState} handleAddProject={handleAddProject} handleProjectDeletion={handleProjectDeletion} ></Main>
       
      </section>
    </>
  );
}


    //   const [taskName,setTaskName] = useState("")
      
    //   function addTaskToList(task,projectTitle){
    //     setPrjTaskList((prevObj) => {

    //           if(prevObj.hasOwnProperty(projectTitle) && prevObj[projectTitle].includes(task)) return {...prevObj}
    //           // if(prevObj[projectTitle].includes('')) prevObj[projectTitle].shift()
    //           const updatedPrjTaskObj = prevObj[projectTitle] ? [...prevObj[projectTitle],task] : [task]
              
    //           return {...prevObj,[projectTitle]:updatedPrjTaskObj}
    //   });

    //     console.log(prjTaskList)

    //     setTaskName((prevTaskName=> ""))
    // }
    
        
    // function removeTaskToList(task,projectTitle){
    
    //   console.log("this is to remove tsk "+task)
    //     let taskIndex = -1 
    //           setPrjTaskList((prevObj) => {

    //             if(prevObj.hasOwnProperty(projectTitle) && !prevObj[projectTitle].includes(task)) return {...prevObj}
    //              taskIndex = prevObj[projectTitle].findIndex(currTask => currTask === task)
    //             // if(prevObj[projectTitle].includes('')) prevObj[projectTitle].shift()
    //             const updatedPrjTaskObj = [...prevObj[projectTitle].slice(0,taskIndex),...prevObj[projectTitle].slice(taskIndex+1)]
                
    //             return {...prevObj,[projectTitle]:updatedPrjTaskObj}
    //     });
    //           setTaskName("")
    //     }
    
    
    //     function handleTaskInput(e){
    //         setTaskName(prevTask=> e.target.value  )
    //     }

export default App;
