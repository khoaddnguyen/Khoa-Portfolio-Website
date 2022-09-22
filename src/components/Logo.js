import React, { Component } from 'react';
import './Logo.css';
import logo from '../khoa1.png';


class Logo extends Component {
  render() {
    return (
      <div className="Logo">
			<header>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
      </div>
    );
  }
}

export default Logo;
