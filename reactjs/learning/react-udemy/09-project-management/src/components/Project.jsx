

export default function Project({project,handleClick}){
    return <button  onClick={() => handleClick(project)} className="pb-1 text-white ">{project.title}</button>

}