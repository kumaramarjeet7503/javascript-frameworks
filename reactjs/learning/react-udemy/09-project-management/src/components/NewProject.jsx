import { useRef, useState } from "react";
import Input from './Input.jsx'
import Button from './Button.jsx'
import Modal from "./Modal.jsx";

export default function NewProject({handleNewProject,handleAddProject}) {

//  Ref is used to get the updated value without setting or changing a state
  let title = useRef()
  let description = useRef()
  let dueDate = useRef()
  const modal = useRef()

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
    if(!title.current.value || !description.current.value || !dueDate.current.value){
      modal.current.open()
      return
    }
    handleAddProject({
      title:title.current.value,
      description: description.current.value,
      dueDate: formatDate(dueDate.current.value)
    })
    handleNewProject(undefined)
  }

  function formatDate(dateString) {
    const date = new Date(dateString); // Parse the input date string
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
    const year = date.getFullYear(); // Get full year
  
    return `${day}-${month}-${year}`; // Return in dd mm yyyy format
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

{/*  Here in order to use ref, associate the defined useRef element to ref attribute */}
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
      <Modal ref={modal} buttonCaption="Close" >
        <h2 className="text-xl font-bold text-stone-900 mb-4">Invalid Input !!!</h2>
        <p className="text-stone-800 ">Please fill all the details on the page.</p>
        <p className="text-stone-800 mb-1">Please make sure you provide a valid value for the field.</p>
      </Modal>
    </section>
  );
}
