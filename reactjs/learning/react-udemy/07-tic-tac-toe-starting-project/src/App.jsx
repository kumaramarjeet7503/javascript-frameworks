import Player from "./component/Player.jsx"
import GameBoard from "./component/GameBoard.jsx"
import { useState } from "react"

function App() {
  

  const [activePlayer,setActivePlayer] = useState("X");
  const [gameTurn,setGameTurn] = useState([]);

  function handleBoardSymbol(rowIndex,colIndex){
    setActivePlayer((currPlayer)=> currPlayer === "X" ? "O" : "X");
    setGameTurn(prevTurn => {
          let currPlayer = "X";
      if(prevTurn.length > 0 && prevTurn[0].player === 'X'){
        currPlayer = "O"
      }
      const updatedTurn = [{square:{row:rowIndex,col:colIndex},player:currPlayer},...prevTurn,] ;
      return updatedTurn;
  })
  }

  return <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName="Player1" symbol="X" isActive={activePlayer === "X"}  ></Player>
         <Player initialName="Player2" symbol="O" isActive={activePlayer === "O"} ></Player>
        </ol>
        <GameBoard onSelectSquare={handleBoardSymbol}  turns={gameTurn} />
    </div>
    LOG
  </main>

}

export default App
