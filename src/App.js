import React, { Component } from 'react';
import './App.css';
import LightGithub from './indexlight';
import DarkGithub from './indexdark'


class App extends Component {

  render() {
    return(
      <div>
      <LightGithub user = "Mary62442"/>
      <DarkGithub user = "diegomary"/>
      </div>
      )
  }
  
}

export default App;
