import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor:'#3E3E3E',
    color:'#FFFFFF',
    top: '0',
    width: '100%',
    height: '6em',
    marginTop: '-1.4em',
    marginBottom: '3em',
    paddingTop: '1.4em',
    paddingLeft: '1.4em',
  }
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>Nine Livers Tap Room</h1>
      </div>
      <br/>
    </React.Fragment>
  )
}

export default Header;