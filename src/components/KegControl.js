import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
          formVisibleOnPage:false,
          selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                    formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg})
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleSellPint  = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.pintsRemaining > 0) {
      selectedKeg.pintsRemaining--;
    } else {
      selectedKeg.pintsRemaining = 0;
    }
    const newMainKegList = this.state.mainKegList.map(
      keg => { return keg.id === id ? selectedKeg : keg}
    )
    this.setState({
      mainKegList: newMainKegList
    })
    }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
                  keg = {this.state.selectedKeg} 
                  onClickingDelete = {this.handleDeletingKeg} onClickingSell = {this.handleSellPint} />
      buttonText = "RETURN TO KEG LIST";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "RETURN TO KEG LIST";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "ADD NEW KEG";
    }
  
    return (
      <React.Fragment>
        <div className="controlStyle">
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;