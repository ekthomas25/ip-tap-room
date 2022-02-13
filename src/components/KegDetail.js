import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingSell } = props;

    let kegStatus = null;

    if (keg.pintsRemaining === 0) {
      kegStatus = "Out of Stock!";
    } else if (keg.pintsRemaining < 10) {
      kegStatus = "Almost Empty!";
    }

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      Beer Name: {keg.name}
      <br/>
      Brewery: {keg.brand}
      <br/>
      Price: ${keg.price}
      <br/>
      Alcohol Content: {keg.alcoholContent}%
      <br/>
      Pints Remaining: {keg.pintsRemaining} {kegStatus}
      <button onClick={()=> onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick={()=> onClickingSell(keg.id)}>Sell Pint</button>
      <hr/>
    </React.Fragment>
  );
}

export default KegDetail;

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func
};