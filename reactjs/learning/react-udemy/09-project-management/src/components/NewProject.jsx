import { useRef, useState } from "react";
import Input from './Input.jsx'
import Button from './Button.jsx'

export default function NewProject({handleNewProject,handleAddProject}) {


  let title = useRef()
  let description = useRef()
  let dueDate = useRef()

  // let projectObj = {
  //   title:"",
  //   description:"",
  //   dueDate:"",
  //   toString:function(){
  //     return `title:${this.title},desc:${this.description},dueDate:${this.dueDate}`
  //   }
  // }

  // const [project,setProject] = useState(projectObj)


  function saveProject(e){
    e.preventDefault()
    console.log(title.current.value)
    handleAddProject({
      title:title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    })
    handleNewProject(undefined)
  }

  // function handleInput(e){
  //   // console.log(e.target.value)
  //   setProject((prevProj) =>{
  //     return {...prevProj,[e.target.id]:e.target.value}
  //   })
  // }


  return (

    <section id="create-project" className="pl-20" style={{width:"80%"}}>
            <form    className="p-5">
      <div className="text-right">
        {/* <button onClick={handleClick}  className="  p-1 pb-1.5 px-4 rounded mt-5 font-normal ml-auto">
          Cancel
        </button> */}
        <Button onClick={()=>handleNewProject(undefined)} > Cancel</Button>
        <Button className="bg-amber-950 text-white " onClick={saveProject}> Save</Button>
      </div>

      <Input className="w-full" ref={title} type="text" label={"title"} ></Input>
      <Input className="w-full"  ref={description} textarea  label={"description"}></Input>
      <Input className="w-full py-1"  ref={dueDate} type="date"  label={"due Date"}></Input>
        {/* <div className="block">
          <label className="block text-sm font-semibold">TITLE</label>
          <input value={project.title} id="title" onChange={(e) => handleInput(e)} className="bg-gray-300 border-t-0 p-1" style={{width: "100%"}} type="text" />
        </div>
        <div className="block">
          <label className="block text-sm font-semibold">DESCRIPTION</label>
          <textarea onChange={(e) => handleInput(e)} id="description" value={project.description} className="bg-gray-300" style={{width: "100%"}}   />
        </div>
        <div className="block text-sm font-semibold">
          <label className="block">DUE DATE</label>
          <input onChange={(e) => handleInput(e)} id="dueDate" value={project.dueDate} className="bg-gray-300 p-1 text-sm" style={{width: "100%"}}  type="date" />
        </div>  */}
      </form>
    </section>
  );
}
