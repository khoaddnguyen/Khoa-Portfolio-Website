import React, { Component } from 'react';
import './App.css';
import './components/reset.css';
import Bio from './components/Bio.js';
import Header from './components/Header.js';
import Social from './components/Social.js';
import Logo from './components/Logo.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Header/>
        <Social/>
        <Projects/>
        <Bio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
