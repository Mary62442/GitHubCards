import React, { Component } from 'react';
import './App.css';
import LightGithub from './indexlight';
import DarkGithub from './indexdark'


class App extends Component {

  render() {
    return(
      <div className = "mainContainer">
      <h1><i className="fa fa-github" aria-hidden="true"></i> GitHub Cards</h1>
      <h3>Light theme</h3>
      <LightGithub user = "Mary62442"/>
      <h3>Light theme</h3>
      <DarkGithub user = "diegomary"/>
      </div>
      )
  }
  
}

export default App;
