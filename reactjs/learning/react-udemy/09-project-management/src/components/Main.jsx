import NewProject from "./NewProject";
import {useState} from 'react'
import Index from "./Index.jsx"
export default function Main() {

    const [showIndex,setShowIndex] = useState(true);
    const [showCreate,setShowCreate] = useState(false);

    function handleClick(){
        
    }

  return (
    <main id="main" style={{width: "82vw"}} >
     {showIndex && < Index />}
      {showCreate && <NewProject></NewProject>}
    </main>
  );
}
