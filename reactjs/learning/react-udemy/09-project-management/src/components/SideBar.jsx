
import Button from './Button.jsx'
import Project from './Project.jsx'

export default function SideBar({handleNewProject,projectState}){

    console.log("inside ")
            // 

            return  (<aside style={{height: '100vh'}} className="bg-[#2c190b]  w-[250px] rounded pl-5 min-h-10"> 
                        <h2 className="text-white text-xl font-bold mt-12">YOUR PROJECTS</h2>
                        {<Button onClick={()=>handleNewProject(null)} className="text-white bg-[#9e8775a8]  px-3 py-1 rounded mt-5 mb-4">+ Add Project</Button>}
                        <div>
                            {projectState.projects.map((project)=>{
                                return   <Project  key={project.id} project={project}></Project>   
                            })}
                        </div>
                    </aside>)
}