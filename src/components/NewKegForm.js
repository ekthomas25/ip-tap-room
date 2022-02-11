import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmit(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.price.value, pintsRemaining: 124, id: v4() })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Beer Name"
        />
        <input
            type="text"
            name="brand"
            placeholder="Brewery Name"
        />
        <input
            type="number"
            name="price"
            placeholder="Price/Pint"
        />
        <input
            type="number"
            name="alcoholContent"
            placeholder="Price/Pint"
        />
      <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}
export default NewKegForm;