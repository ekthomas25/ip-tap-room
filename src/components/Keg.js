import React from 'react';

function Keg(props) {
  return (
    <React.Fragment>
      {props.name} - 
      {props.brand} - 
      {props.price} - 
      {props.alcoholContent}
    </React.Fragment>
  )
}

export default Keg;