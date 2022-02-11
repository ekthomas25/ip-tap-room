import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      {keg.name}
      {keg.brand}
      {keg.price}
      {keg.alcoholContent}
      {keg.pintsRemaining}
    </React.Fragment>
  );
}

export default KegDetail;

KegDetail.propTypes = {
  keg: PropTypes.object
}