import React from 'react';
import "./index.css";

const Square = ( {value, onClick} ) => {
 const style = value ? `squares ${value}` : 'squares';
  return (
      <div className={style} onClick={onClick}>
         <span> {value} </span>
      </div>
  );
}

export default Square;
