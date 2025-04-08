import { useState } from "react"

export default function SideBar({handleClick,showIndex,projectList}){

            // const projectList = ['maa','pzzz']
     

            return  (<aside style={{height: '100vh'}} className="bg-amber-950 w-[250px] rounded text-center min-h-10"> 
                        <h2 className="text-white font-bold mt-20">YOUR PROJECTS</h2>
                        {<button onClick={handleClick} className="text-white bg-amber-700  px-3 py-1 rounded mt-5 ">+ Add Project</button>}
                        <div>
                            {projectList.map((item)=>{
                                 console.log(item)
                                return <h2 key={item} className="bg-red">{item}</h2>
                            })}
                        </div>
                    </aside>)
}