import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  let kegStatus = null;

  if (props.pintsRemaining === 0) {
    kegStatus = "- Out of Stock!";
  } else if (props.pintsRemaining < 10) {
    kegStatus = " - Almost Empty!";
  }


  return (
    <React.Fragment>
      <div className="listStyle" onClick = {() => props.whenKegClicked(props.id)}>
      <hr/>
        {props.name} &nbsp;&nbsp; - &nbsp;&nbsp; {props.brand} &nbsp;&nbsp; - &nbsp;&nbsp; ${props.price} &nbsp;&nbsp; - &nbsp;&nbsp; {props.alcoholContent}% &nbsp;&nbsp; {kegStatus}
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;