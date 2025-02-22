import Player from "./component/Player.jsx";
import GameBoard from "./component/GameBoard.jsx";
import { useState } from "react";
import Log from "./component/Log.jsx";
import { WINNING_COMBINATIONS } from "./component/winning-combinations.js";
import GameOver from "./component/GameOver.jsx";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X:"PLAYER 1",
  O:"PLAYER 2"
}

function deriveActivePlayer(prevTurn) {
  let currPlayer = "X";
  if (prevTurn.length > 0 && prevTurn[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function deriveGameBoard(gameTurn) {
  const gameBoard = [...INITIAL_BOARD.map(array => [...array])]
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard
}

function selectWinner(newGameBoard,player){
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = newGameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = newGameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol  = newGameBoard[combination[2].row][combination[2].column]
      
       if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
          winner = player[firstSquareSymbol]
       }
  }
  return winner
}

function App() {
  const [player,setPlayer] = useState(PLAYERS)
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);
  let newGameBoard = deriveGameBoard(gameTurn)
  let winner =selectWinner(newGameBoard,player)
  const hasDraw = gameTurn.length === 9 && !winner 

  function handleBoardSymbol(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  function handleRestart() {
    setGameTurn([]);
  }

  function handlePlayerName(symbol,playerName){
    setPlayer(prevPlayer=> {
     return { ...prevPlayer,
      [symbol]:playerName}
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol={PLAYERS.X}
            isActive={activePlayer === PLAYERS.X}
            onChangePlayer={handlePlayerName}
          ></Player>
          <Player
            initialName="Player2"
            symbol={PLAYERS.O}
            isActive={activePlayer === PLAYERS.O}
            onChangePlayer={handlePlayerName}
          ></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleBoardSymbol} board={newGameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
