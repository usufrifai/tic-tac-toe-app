import React from "react";
import Square from "../../atoms/square";
import Heading from "../../atoms/heading";
import "./index.css";

const Board = ({ squares, onClick, player, winnerMessage }) => (
<div className='board-container'> 
  <Heading title="Game"/>
  <div className="board">
    {squares.map((square, i) => (<Square key={i} value={square} onClick={() => onClick(i)} />))}
  </div>
    {!winnerMessage && (<h5 className="playerName" >{`Hey ${player} its your turn`}</h5> )}
    {winnerMessage && (<h5 className="playerName" > Game Over </h5> )}
</div>
);

export default Board;