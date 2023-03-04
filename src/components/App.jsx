import React, { useState } from 'react';
import axios from 'axios';

import * as infiniteFusionData from '../data/infiniteFusionData.js'
import Fusion from './fusion/Fusion'
import FusionInput from './FusionInput';

function App() {
  const [pokemon1, setPokemon1] = useState(['', 0]);
  const [pokemon2, setPokemon2] = useState(['', 0]);

  return (
    <>
      <h1>Infinite Fusion Calculator</h1>
      <span>pokemon1 state {`[${pokemon1[0]},${pokemon1[1]}]`}</span>
      <br></br>
      <span>pokemon2 state {`[${pokemon2[0]},${pokemon2[1]}]`}</span>
      <FusionInput setPokemon={setPokemon1} pokemon={pokemon1} inputFor={'pokemon1'}/>
      <FusionInput setPokemon={setPokemon2} pokemon={pokemon2} inputFor={'pokemon2'}/>
      <Fusion />
    </>
  );
}

export default App
