import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      Beer Name: {keg.name}
      <br/>
      Brewery: {keg.brand}
      <br/>
      Price: {keg.price}
      <br/>
      Alcohol Content: {keg.alcoholContent}
      <br/>
      Pints Remaining: {keg.pintsRemaining}
      <hr/>
    </React.Fragment>
  );
}

export default KegDetail;

KegDetail.propTypes = {
  keg: PropTypes.object
}