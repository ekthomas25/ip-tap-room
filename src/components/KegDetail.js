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
      <div className="detailsStyle">
        Beer Name: &nbsp;&nbsp; {keg.name}
        <br/>
        Brewery: &nbsp;&nbsp; {keg.brand}
        <br/>
        Price: &nbsp;&nbsp; ${keg.price}
        <br/>
        Alcohol Content: &nbsp;&nbsp; {keg.alcoholContent}%
        <br/>
        Pints Remaining: &nbsp;&nbsp; {keg.pintsRemaining} {kegStatus}
        <br />
      </div>
      <button className="secondaryBtn" onClick={()=> onClickingDelete(keg.id)}>REMOVE KEG</button>
      <button className="sellPintBtn" onClick={()=> onClickingSell(keg.id)}>SELL PINT</button>
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