import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import Trophy from '../../assets/winner.gif';
import Heading from '../../atoms/heading';

import './index.css';

const InformationlBock = ({ winnerMessage, users,  resetGame, newGame }) => {

  const { firstPlayer , secondPlayer } = users;
  const active =  !firstPlayer ? true : false;
  return (
      <div className="information-container">
        <Heading title="Information"/>
          <ListGroup>
              <ListGroup.Item variant="warning">Player One : {firstPlayer}</ListGroup.Item>
              <ListGroup.Item>Player Two : {secondPlayer}</ListGroup.Item>
          </ListGroup>
          <img  className="trophy" src={Trophy} alt="Winner" />;
          <h4>{ winnerMessage && winnerMessage}</h4>
          <Button  variant="warning" onClick={() => newGame()} disabled={active} >Start New Game</Button>{' '}
          <Button  variant="secondary" onClick={() => resetGame()} disabled={active}>Play Again</Button>
      </div>
  );
}

export default InformationlBock;
