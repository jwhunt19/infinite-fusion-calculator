import React, { useState } from 'react';
import axios from 'axios';

import * as infiniteFusionData from '../data/infiniteFusionData.js'
import Fusion from './fusion/Fusion'
import FusionInput from './FusionInput';

const App = () => {
  const [pokemon1, setPokemon1] = useState(['', undefined]);
  const [pokemon2, setPokemon2] = useState(['', undefined]);

  return (
    <>
      <h1>Infinite Fusion Calculator</h1>
      <FusionInput setPokemon={setPokemon1} pokemon={pokemon1} inputFor={'pokemon1'}/>
      <FusionInput setPokemon={setPokemon2} pokemon={pokemon2} inputFor={'pokemon2'}/>
      <br /><br />
      <Fusion head={pokemon1} body={pokemon2}/>
      <br /><br />
      <Fusion head={pokemon2} body={pokemon1}/>
    </>
  );
}

export default App
