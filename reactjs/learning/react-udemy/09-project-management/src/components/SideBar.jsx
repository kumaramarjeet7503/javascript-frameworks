import { useState } from "react"
import Project from './Project.jsx'

export default function SideBar({handleClick,showIndex,projectList}){

            // const projectList = ['maa','pzzz']
          
     

            return  (<aside style={{height: '100vh'}} className="bg-[#2c190b]  w-[250px] rounded pl-5 min-h-10"> 
                        <h2 className="text-white text-xl font-bold mt-12">YOUR PROJECTS</h2>
                        {<button onClick={()=>handleClick(null)} className="text-white bg-[#9e8775a8]  px-3 py-1 rounded mt-5 mb-4">+ Add Project</button>}
                        <div>
                            {projectList.map((project,index)=>{
                                 
                                return   <Project handleClick={handleClick} key={index} project={project} index={index}></Project>   
                                
                                 
                            })}
                        </div>
                    </aside>)
}