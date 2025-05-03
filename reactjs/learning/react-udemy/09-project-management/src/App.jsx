import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {



  //  For project
  const [projectList, addProject] = useState([])
  const [prjTaskList,setPrjTaskList] = useState({})

  const [projectObj,setProject] = useState(null)

   const [showIndex,setShowIndex] = useState(true);
      const [showCreate,setShowCreate] = useState(false);
  
      function addProjectItem(project){
        addProject(prevPrj =>{
            return [...prevPrj,project]
        })

        console.log(prjTaskList)

        setPrjTaskList(prevList => {
            if(prevList.hasOwnProperty(project)) return {...prevList}
            else return {...prevList,[project.title]:[]} 
        })
        console.log(prjTaskList)

        handleClickForProject(null)
      }

      function handleClickForProject(project = null){
      
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

        setPrjTaskList(prevList => {
          // if(prevList.hasOwnProperty(projectItem.title))  
             const { [projectItem.title]: _, ...updatedList } =  prevList
          return updatedList
      })

      console.log(prjTaskList)

        setProject(null)

      }


      //  For Task 
      const [taskList, addTask] = useState([])
 
      const [taskName,setTaskName] = useState("")
      
      function addTaskToList(task,projectTitle){
        // addTask((prevTask)=>{
        //   // let prjCons = {};
        //   // prjCons[projectTitle,taskList]

        //     // if(prevTask.length > 0 && prevTask.includes(projectTitle)){
        //     //     prevTask[projectTitle].push(task) 
        //     // }else{
        //     //   prevTask[projectTitle] = [task]
        //     // }

        //     return [...prevTask]
        //   //  return  {...prevTask,[projectTitle]:[...(prevTask[projectTitle]  || [] ),task]}
        // });

       

        setPrjTaskList((prevObj) => {

              if(prevObj.hasOwnProperty(projectTitle) && prevObj[projectTitle].includes(task)) return {...prevObj}
              // if(prevObj[projectTitle].includes('')) prevObj[projectTitle].shift()
              const updatedPrjTaskObj = prevObj[projectTitle] ? [...prevObj[projectTitle],task] : [task]
              
              return {...prevObj,[projectTitle]:updatedPrjTaskObj}
      });

        console.log(prjTaskList)

        setTaskName((prevTaskName=> ""))
    }
    
        
    function removeTaskToList(task,projectTitle){
    
      console.log("this is to remove tsk "+task)
        let taskIndex = -1 
        //     taskList.forEach((currTask,index)=>{
        //             if(currTask == task) taskIndex = index
        //     })
        //     addTask((prevTask) => {
        //       //  return  [...prevTask.slice(0,index),...prevTask.slice(index+1)]
        //       console.log("task index :"+taskIndex)
              
        //       return [...prevTask.slice(0,taskIndex),...prevTask.slice(taskIndex+1)]
        //       } )
              // console.log("task list :"+taskList)

              setPrjTaskList((prevObj) => {

                if(prevObj.hasOwnProperty(projectTitle) && !prevObj[projectTitle].includes(task)) return {...prevObj}
                 taskIndex = prevObj[projectTitle].findIndex(currTask => currTask === task)
                // if(prevObj[projectTitle].includes('')) prevObj[projectTitle].shift()
                const updatedPrjTaskObj = [...prevObj[projectTitle].slice(0,taskIndex),...prevObj[projectTitle].slice(taskIndex+1)]
                
                return {...prevObj,[projectTitle]:updatedPrjTaskObj}
        });
  
              

              setTaskName("")
        }
    
    
        function handleTaskInput(e){
            setTaskName(prevTask=> e.target.value  )
        }
        



  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar handleClick={handleClickForProject}   projectList={projectList} showIndex={showIndex} />
        < Main  taskList={prjTaskList}  handleTaskInput={handleTaskInput}  removeTaskToList={removeTaskToList} taskName={taskName} addTaskToList={addTaskToList} handleClickForProject={handleClickForProject} handleDelete={handleDelete} projectObj={projectObj}  addProject={addProjectItem} showCreate={showCreate} showIndex={showIndex}  />
      </section>
    </>
  );
}

export default App;
