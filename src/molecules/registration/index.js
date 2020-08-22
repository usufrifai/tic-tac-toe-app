import React from 'react';
import { Form, Button, ListGroup  } from 'react-bootstrap';
import Heading from '../../atoms/heading';
import  './registration.css';

const Registration = ( props ) => {
  const { registationError, onRegistationSubmit, setFirstPlayer, setSecondPlayer, firstPlayer, secondPlayer} = props;
  const fieldStyle = {height:'50px', fontSize:'20px'}
  return (
<>
  <Form className="registration-container">
    { registationError && (
      <ListGroup>
        <ListGroup.Item variant="danger">Please provide unique names and names cannot be empty </ListGroup.Item>
    </ListGroup>
    ) }
    <Heading title="Register"></Heading>
    <Form.Group controlId="playerOne">
       <Form.Label><h4> Player One </h4></Form.Label>
       <Form.Control
            onChange={(e)=> setFirstPlayer(e?.target.value)} 
            style={fieldStyle} 
            required
            className="field" 
            type="text" 
            placeholder="First Player Name"
            value={firstPlayer}
        />
   </Form.Group>
  
    <Form.Group controlId="playerTwo">
        <Form.Label style={{marginTop:'5px'}}><h4> Player Two </h4></Form.Label>
        <Form.Control 
            onChange={(e)=> setSecondPlayer(e?.target.value)} 
            required  
            style={fieldStyle} 
            type="text" 
            placeholder="Second Player Name" 
            value={secondPlayer}
        />
       </Form.Group>
      <Form.Group>
       <Button  onClick={e => onRegistationSubmit(e)} style={fieldStyle} variant="warning" type="submit">
            Start Game
       </Button>
       </Form.Group>
  </Form>
 </>
  )
  
 
}

export default Registration;