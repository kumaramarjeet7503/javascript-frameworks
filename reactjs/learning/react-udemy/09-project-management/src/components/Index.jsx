import noProjectImg from "../assets/no-projects.png";
import Button from './Button.jsx'
export default function Index({handleNewProject}){
    return <div className="flex flex-col mx-auto my-20 " >
    <figure className="flex justify-center mb-2">
      <img style={{ width: "100px", height: "100px" }} src={noProjectImg} />
    </figure>
    <article id="index" className="text-center">
      <h2 className="font-bold mb-4">No Project Selected</h2>
      <p className="text-gray-500 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={()=>handleNewProject(null)} className="text-white bg-amber-950 ">
        Create new Project
      </Button>
    </article>
  </div>
}