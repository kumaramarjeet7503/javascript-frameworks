import { useState } from "react"
import Project from './Project.jsx'

export default function SideBar({handleClick,showIndex,projectList}){

            // const projectList = ['maa','pzzz']
          
     

            return  (<aside style={{height: '100vh'}} className="bg-amber-950 w-[250px] rounded pl-5 min-h-10"> 
                        <h2 className="text-white font-bold mt-20">YOUR PROJECTS</h2>
                        {<button onClick={handleClick} className="text-white bg-amber-700  px-3 py-1 rounded mt-5 mb-3">+ Add Project</button>}
                        <div>
                            {projectList.map((project,index)=>{
                                 
                                return   <Project handleClick={handleClick} key={index} project={project} index={index}></Project>   
                                
                                 
                            })}
                        </div>
                    </aside>)
}