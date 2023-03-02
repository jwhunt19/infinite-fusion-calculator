import React from 'react';
import axios from 'axios';

import * as infiniteFusionData from '../data/infiniteFusionData.js'

import Fusion from './fusion/Fusion'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  test (x) {
    console.log(x)
  }

  render () {
    return (
      <>
        <h1>Infinite Fusion Calculator</h1>
        <button onClick={() => this.test(infiniteFusionData.aegislashStats)}>test</button>
        <Fusion />
      </>
    )
  }
}

export default App
