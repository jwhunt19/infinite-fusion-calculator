import React from "react";

import { ids } from '../data/infiniteFusionData.js'

const FusionInput = ({ pokemon, setPokemon, inputFor }) => {
  const handleChange = (e) => {
    setPokemon([e.target.value, pokemon[1]])
  };

  return (
    <div>
      <label htmlFor={`${inputFor}-input`}>Pokemon {inputFor[inputFor.length - 1]}</label>
      <input
        id={`${inputFor}-input`}
        name={`${inputFor}-input`}
        list={`${inputFor}-list`}
        type="text"
        placeholder="choose your pokemon"
        value={pokemon[0]}
        onChange={handleChange}
      />
      <datalist id={`${inputFor}-list`}>
        {ids.map((id) => (
          <option>{id[0]}</option>
        ))}
      </datalist>
    </div>
  );
};

export default FusionInput;
