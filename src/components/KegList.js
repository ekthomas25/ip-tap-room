import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <h2>CURRENTLY ON TAP:</h2>
        {props.kegList.map((keg) =>
          <Keg
            whenKegClicked = {props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            id={keg.id}
            key={keg.id}
          />  
          )}
      <hr/>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;