
import Button from './Button.jsx'
import Project from './Project.jsx'

export default function SideBar({handleNewProject,projectState, handleProjectSelection}){

            return  (<aside style={{height: '100vh'}} className="bg-[#2c190b]  w-[250px] rounded pl-5 min-h-10"> 
                        <h2 className="text-white text-xl font-bold mt-12">YOUR PROJECTS</h2>
                        {<Button onClick={()=>handleNewProject(null)} className="text-white bg-[#9e8775a8]  px-3 py-1 rounded mt-5 mb-4">+ Add Project</Button>}
                        <div>
                            {projectState.projects.map((project)=>{
                                return   <Button onClick={handleProjectSelection} key={project.id} id={project.id} className="pb-1 pl-2 w-[95%] text-white text-left font-semibold bg-opacity-10 bg-slate-300">{project.title}</Button>
                            })}
                        </div>
                    </aside>)
}