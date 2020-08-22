import React from 'react';
import  './index.css';

const Heading = ({title, width}) => {
 return (
  <div className="heading"  style={{width:width}}>
      <h3>{title}</h3>
  </div>
 )
}
export default Heading;
