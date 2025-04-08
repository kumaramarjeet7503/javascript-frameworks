import { useRef, useState } from "react";

export default function NewProject({handleClick,addProject}) {

  let projectObj = {
    title:"",
    description:"",
    dueDate:"",
    toString:function(){
      return `title:${this.title},desc:${this.description},dueDate:${this.dueDate}`
    }
  }

  const [project,setProject] = useState(projectObj)

  const projectForm = useRef()

  function saveProject(e){
    e.preventDefault()
    addProject(project.title)
  }

  function handleInput(e){
    // console.log(e.target.value)
    setProject((prevProj) =>{
      return {...prevProj,[e.target.id]:e.target.value}
    })
  }


  return (

    <section id="create-project" className="pl-20" style={{width:"80%"}}>
            <form ref={projectForm} onSubmit={(e)=> saveProject(e)}  className="p-5">
      <div className="text-right">
        <button onClick={handleClick}  className="  p-1 pb-1.5 px-4 rounded mt-5 font-normal ml-auto">
          Cancel
        </button>
        <button   className="text-white bg-amber-950 p-1 pb-1.5 px-4 rounded mt-5 font-normal">
          Save
        </button>
      </div>


        <div className="block">
          <label className="block text-sm font-semibold">TITLE</label>
          <input value={project.title} id="title" onChange={(e) => handleInput(e)} className="bg-gray-300 border-t-0 p-1" style={{width: "100%"}} type="text" />
        </div>
        <div className="block">
          <label className="block text-sm font-semibold">DESCRIPTION</label>
          <textarea onChange={(e) => handleInput(e)} id="description" value={project.description} className="bg-gray-300" style={{width: "100%"}}  type="text" />
        </div>
        <div className="block text-sm font-semibold">
          <label className="block">DUE DATE</label>
          <input onChange={(e) => handleInput(e)} id="dueDate" value={project.dueDate} className="bg-gray-300 p-1 text-sm" style={{width: "100%"}}  type="date" />
        </div> 
      </form>
    </section>
  );
}
