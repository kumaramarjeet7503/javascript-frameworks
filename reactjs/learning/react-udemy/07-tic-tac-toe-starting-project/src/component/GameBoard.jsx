import { useState } from "react"

const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){

    const [gameBoard,setGameBoard] = useState(initialBoard)

    function handleClick(rowIndex, colIndex){
        setGameBoard((gameBoard)=>{
            const updatedBoard = [...gameBoard.map(innerArr => [...innerArr])]
            updatedBoard[rowIndex][colIndex] = "X"
            return updatedBoard
        })
    }

    return (<ol id="game-board">
            {
                gameBoard.map((row,rowIndex) => <li key={rowIndex}>
                 <ol>
                    { row.map((playerSymbol,index)=> <li key={index}><button onClick={()=>handleClick(rowIndex,index)}>{playerSymbol}</button></li>)}
                </ol>
                </li>)
            }
    </ol>)
}