import React, { Component } from 'react';
import Player from './player'
import Logo from '../components/logo'
import './App.less'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Logo />
        <Player />
      </div>
    )
  }
}

export default App;
