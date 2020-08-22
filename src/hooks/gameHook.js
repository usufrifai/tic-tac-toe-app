import { useState, useEffect } from 'react';


const useGameHook = ({users, postHistory}) => {

    const [selectedSqures, setSelectedSqures] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const xo = xIsNext ? "X" : "O";
    const { firstPlayer, secondPlayer } = users;
    const player = xIsNext ? firstPlayer : secondPlayer;
    let [message, setMessage] = useState(null);

    const calculateWinner = () => {
        const posibleList = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        const squares = selectedSqures[stepNumber];
        for (let i = 0; i < posibleList.length; i++) {
          const [first, second, third] = posibleList[i];
          if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
            return squares[first];
          }
        }
        return null;
    }
    const winner = calculateWinner(selectedSqures[stepNumber]);
   
    const onClickHandler = index => {
        const historyPoint = selectedSqures.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if (winner || squares[index]) return;
        squares[index] = xo;
        setSelectedSqures([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    }

  const resetGame = () => {
        setSelectedSqures([Array(9).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
  }

  useEffect(() => {
    if (winner || selectedSqures?.length > 9){
      const winnerName = winner && winner === "X" ? firstPlayer : secondPlayer;
      const date = new Date();
      const toDigitNumber = number => number.length > 1 ? number : `0${number}`  
      setMessage(winner ? `The Winner is: ${winnerName}` : "Game Draw"); 
      postHistory({
        'playerOne':firstPlayer,
        'playerTwo': secondPlayer,
        'winner': winner ? winnerName : 'Game Draw',
        'date': `${toDigitNumber(date.getDay())}-${toDigitNumber(date.getMonth())}-${date.getFullYear()}`,

      })
  } 
  },[winner || selectedSqures?.length > 9])

    return {
        player,
        onClickHandler,
        selectedSqures,
        stepNumber,
        message,
        resetGame,
        setMessage,
    }

}

export default useGameHook;

