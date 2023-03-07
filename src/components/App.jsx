import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Fusion from './fusion/Fusion'
import FusionInput from './FusionInput';
import { ids } from '../data/infiniteFusionData.js'
import { getPokeAPIData } from '../utils/getPokeAPIData';

const cacheName = 'pokeapi-cache';

const App = () => {
  const [pokemon1, setPokemon1] = useState(['', undefined, {}]);
  const [pokemon2, setPokemon2] = useState(['', undefined, {}]);

  useEffect(() => {
    if(pokemon1[0] && pokemon2[0]) {
      getPokeAPIData(pokemon1[0])
      getPokeAPIData(pokemon2[0])
    }
  }, [pokemon1, pokemon2])

  return (
    <>
      <h1>Infinite Fusion Calculator</h1>
      <span>Based on work by and sourcing images/data from 
        <a href='https://github.com/Aegide' target='_blank'> Aegide</a>
      </span>
      <FusionInput setPokemon={setPokemon1} pokemon={pokemon1} inputFor={'pokemon1'}/>
      <FusionInput setPokemon={setPokemon2} pokemon={pokemon2} inputFor={'pokemon2'}/>
      <Fusion head={pokemon1} body={pokemon2}/>
      <Fusion head={pokemon2} body={pokemon1}/>
    </>
  );
}

export default App
