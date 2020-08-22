import React from 'react';
import Board from '../../molecules/board';
import InformationlBock from '../../molecules/information-block';
import Registration from '../../molecules/registration';
import History from '../../molecules/history';
//import {div, div, div} from 'react-bootstrap'
import './index.css';
import  useGameHook from '../../hooks/gameHook';
import  useRegistrationHook from '../../hooks/registrationHook';
import  useHistoryHook from '../../hooks/historyHooks'

export const Game = () => {

    const { 
        users, 
        registationError, 
        onRegistationSubmit, 
        setFirstPlayer, 
        setSecondPlayer, 
        firstPlayer, 
        secondPlayer,
        clearUsersInfo,
    } =  useRegistrationHook();

    const {
         history,
         error, 
         loading,
         postHistory,
    } = useHistoryHook();

    const {
        selectedSqures, 
        stepNumber, 
        onClickHandler, 
        message, 
        player,
        resetGame,
    } = useGameHook({users, postHistory});

  

    return(
        <div className="game-container">
            <div><h1 style={{textAlign:"center", marginTop:"30px"}}> Tic Tac Toe</h1></div>
            <div className="game">
               <div>
               { users.firstPlayer && users.secondPlayer ?
                  (
                    <Board 
                        squares={selectedSqures[stepNumber]} 
                        onClick={onClickHandler}  
                        winnerMessage={message} 
                        player={player}
                    />  
                   ):
                   (
                    <Registration
                        registationError={registationError}
                        onRegistationSubmit={onRegistationSubmit}
                        setFirstPlayer={setFirstPlayer}
                        setSecondPlayer={setSecondPlayer}
                        firstPlayer={firstPlayer} 
                        secondPlayer={secondPlayer}
                     />
                    )
               }
               </div>
               <div>
                   <InformationlBock 
                      users={users}
                      resetGame={resetGame}
                      newGame={() => {
                        resetGame();
                        clearUsersInfo();
                      }}
                      winnerMessage={message}
                   />
               </div>
           </div>
        <div className="history-table-container">
            <div>
                <History 
                 users={users}
                 history={history}
                 error={error}
                 loading={loading}
                />
            </div>
        </div> 
        </div>
    )
}

export default Game;


