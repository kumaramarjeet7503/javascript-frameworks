import { useState } from "react"

export default function Player({initialName,symbol,isActive}){

    const [isEdited, setIsEdited] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    function handleClick(){
        setIsEdited(editing => !editing)
    }

    function handleChange(event){
        setplayerName(event.target.value)
    }

    let playerElement = <span className="player-name">{playerName}</span>;
    if(isEdited){
        playerElement = <input type="text" onChange={handleChange} defaultValue={initialName} />
    }

return   ( <li className={isActive ? "active" :  undefined} >
    <span className="player">
      { playerElement }
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleClick}>{isEdited ? "Save" : "Edit"}</button>
  </li>)
}