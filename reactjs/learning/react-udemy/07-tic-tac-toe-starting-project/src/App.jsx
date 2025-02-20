import Player from "./component/Player.jsx"
import GameBoard from "./component/GameBoard.jsx"
import { useState } from "react"

function App() {
  
  const [activePlayer,setActivePlayer] = useState("X")

  function handleBoardSymbol(){
    setActivePlayer((currPlayer)=> currPlayer === "X" ? "O" : "X")
  }

  return <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName="Player1" symbol="X" isActive={activePlayer === "X"}  ></Player>
         <Player initialName="Player2" symbol="O" isActive={activePlayer === "O"} ></Player>
        </ol>
        <GameBoard onSelect={handleBoardSymbol} activePlayerSymbol={activePlayer} />
    </div>
    LOG
  </main>

}

export default App
