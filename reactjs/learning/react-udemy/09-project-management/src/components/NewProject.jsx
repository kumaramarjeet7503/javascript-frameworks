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

  function saveProject(e){
    e.preventDefault()
    if(!title.current.value || !description.current.value || !dueDate.current.value){
      modal.current.open()
      return
    }
    handleAddProject({
      title:title.current.value,
      description: description.current.value,
      dueDate: formatDate(dueDate.current.value),
      tasks:[]
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

  return (

    <section id="create-project" className="pl-20" style={{width:"80%"}}>
            <form    className="p-5">
      <div className="text-right">
      
        <Button onClick={()=>handleNewProject(undefined)} > Cancel</Button>
        <Button className="bg-amber-950 text-white " onClick={saveProject}> Save</Button>
      </div>

{/*  Here in order to use ref, associate the defined useRef element to ref attribute */}
      <Input className="w-full" ref={title} type="text" label={"title"} ></Input>
      <Input className="w-full"  ref={description} textarea  label={"description"}></Input>
      <Input className="w-full py-1"  ref={dueDate} type="date"  label={"due Date"}></Input>
      </form>
      <Modal ref={modal} buttonCaption="Close" >
        <h2 className="text-xl font-bold text-stone-900 mb-4">Invalid Input !!!</h2>
        <p className="text-stone-800 ">Please fill all the details on the page.</p>
        <p className="text-stone-800 mb-1">Please make sure you provide a valid value for the field.</p>
      </Modal>
    </section>
  );
}
