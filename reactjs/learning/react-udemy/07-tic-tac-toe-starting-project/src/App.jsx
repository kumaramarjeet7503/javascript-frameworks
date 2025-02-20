import Player from "./component/Player.jsx"
import GameBoard from "./component/GameBoard.jsx"

function App() {
  
  return <main>
    <div id="game-container">
        <ol id="players">
         <Player initialName="Player1" symbol="X" ></Player>
         <Player initialName="Player2" symbol="0" ></Player>
        </ol>
        <GameBoard />
    </div>
    LOG
  </main>

}

export default App
