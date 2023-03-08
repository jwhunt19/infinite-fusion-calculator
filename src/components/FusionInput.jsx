import React, { useEffect } from "react";

import { ids } from "../data/infiniteFusionData.js";

const FusionInput = ({ pokemon, setPokemon, inputFor }) => {
  const handleChange = (e) => {
    // disallow periods, hyphens, and spaces which might be expected but aren't used
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    e.target.value = value.toLowerCase();

    // Gets data-id containing pokedex number
    let selectedId;
    const selectedOption = e.target.list.querySelector(
      `[value="${e.target.value}"]`
    );
    if (selectedOption) {
      selectedId = Number(selectedOption.getAttribute("data-id"));
      // sets passed pokemon state to inputted [name, in-game dex #]
      setPokemon((prevState) => {
        const newState = [...prevState];
        newState[0] = e.target.value;
        newState[1] = selectedId;
        return newState;
      });
    }
  };

  return (
    <div className="fusion-input">
      <label htmlFor={`${inputFor}-input`}>
        Pokemon {inputFor[inputFor.length - 1]}
      </label>
      <input
        id={`${inputFor}-input`}
        name={`${inputFor}-input`}
        list={`${inputFor}-list`}
        placeholder="choose your pokemon"
        onChange={handleChange}
      />
      <datalist id={`${inputFor}-list`}>
        {ids.map((id) => (
          <option key={id[1]} value={id[0]} data-id={id[1]} />
        ))}
      </datalist>
    </div>
  );
};

export default FusionInput;
