export default function Project({project,handleClick}){
    return <div className="ml-0 m-3  font-semibold bg-opacity-10 bg-slate-300">
             <button  onClick={() => handleClick(project)} className="pb-1 pl-2 text-white">{project.title}</button>
    </div> 

}