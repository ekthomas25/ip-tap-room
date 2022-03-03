import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmit(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pintsRemaining: event.target.pintsRemaining.value, id: v4() })
  }

  return (
    <React.Fragment>
      <h2>Add a Keg</h2>
      <form onSubmit={handleNewKegFormSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Beer Name"
            required
            id='beerName'
        />
        <br/>
        <input
            type="text"
            name="brand"
            placeholder="Brewery Name"
            required
            id='beerBrewery'
        />
        <input
            type="number"
            name="price"
            min='0'
            step=".01"
            placeholder="Price/Pint"
            required
            id='beerPrice'
        />
        <input
            type="number"
            name="alcoholContent"
            min='0'
            step='.1'
            placeholder="ABV%"
            required
            id='beerContent'
        />
        <input
            type="number"
            name="pintsRemaining"
            min='0'
            max='124'
            defaultValue='124'
            required
            id='beerRemain'
        />
        <br/>
      <button className="secondaryBtn" type='submit'>TAP THAT KEG!</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}
export default NewKegForm;