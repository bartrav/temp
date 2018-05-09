import React from 'react';
import logo from 'C:/Users/Main/codetemp/blog/src/logo.svg';

export default class Header extends React.Component {
    render() {
      let headerStyle = {
        backgroundColor: '#222',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        padding: '5px',
        color: 'white',
        fontFamily: 'monospace',
        boxShadow: '0px 3px 10px 0px #888'
      }
      let logoStyle = {
        animation: 'App-logo-spin infinite 20s linear',
        float: 'left',
        margin: 'auto',
        width: '60px',
        padding: '5px'
      }
      let titleStyle = {
        float: 'left',
        margin: '0px',
        padding: '10px'
      }
      let navStyle = {
        float: 'left',
        padding: '5px 10px'
      }
      let emailStyle = {
        float: 'right',
        padding: '5px 25px 0px 0px',
      }
      return (
        <header className="App-header" style={headerStyle}>
          <img className="App-logo" style={logoStyle} src={logo} alt="logo"/>
          <p className="App-title" style={titleStyle}>Title</p>
          <p className="App-nav" style={navStyle}>Item 1</p>
          <p className="App-nav" style={navStyle}>Item 2</p>
          <p className="App-nav" style={emailStyle}>Subscribe</p>
          <p className="App-nav" style={emailStyle}><input placeholder='Your Email'/></p>
        </header>
      );
    }
  }