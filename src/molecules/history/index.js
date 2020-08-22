import React from 'react';
import {Table} from 'react-bootstrap';
import Heading from '../../atoms/heading';

import './index.css';

const History = ({history}) => {
    return (
    <div className="history-table-container">
        <Heading title="Game History" width="100%"></Heading>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Player One</th>
      <th>Player Two</th>
      <th>Winner</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {history?.map((data, index) => (
    <tr key={`${data.id}row${index}`}>
        <td>{index+1}</td>
        <td>{data.playerOne}</td>
        <td>{data.playerTwo}</td>
        <td>{data.winner}</td>
        <td>{data.date}</td>
      </tr>
      )
    )
       
    }
  </tbody>
</Table>
</div>
    )
}

export default History;