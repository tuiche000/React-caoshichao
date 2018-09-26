import React, { Component } from 'react';
import Player from './player'
import Logo from '../components/logo'
import { MUSIC_LIST } from '../config'

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
