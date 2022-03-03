import React from 'react';
import LiversLogo from '../img/9livers-logo.png';

function Header() {
  const headerStyle = {
    backgroundColor:'#000000',
    color:'#FFFFFF',
    top: '0',
    width: '100%',
    height: 'maxContent',
    marginTop: '-1.4em',
    marginBottom: '3em',
    paddingTop: '2.2em',
    paddingBottom: '1em',
    paddingLeft: '1.4em',
  }
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1> <img className="logo" src={LiversLogo} alt="A cat holding a beer" /> Nine Livers Brewing</h1>
      </div>
      <br/>
    </React.Fragment>
  )
}

export default Header;