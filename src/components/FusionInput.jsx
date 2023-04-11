import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { ids } from "../data/infiniteFusionData.js";

const FusionInput = ({ setPokemon, inputFor, isLoading, setShouldUpdatePokemonData}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    // disallow periods, hyphens, and spaces which might be expected but aren't used
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    e.target.value = value.toLowerCase();
    setInputValue(e.target.value);

    // Gets data-id containing pokedex number
    let selectedId;
    const selectedOption = e.target.list.querySelector(
      `[value="${e.target.value}"]`
    );
    if (selectedOption) {
      selectedId = Number(selectedOption.getAttribute("data-id"));
      // Sets name and id on pokemon state
      setPokemon((prevState) => {
        return { ...prevState, name: e.target.value, id: selectedId };
      });
      setShouldUpdatePokemonData(true)
    }
  };

  const randomize = () => {
    const id = Math.floor(Math.random() * (ids.length));
    const randomPokemon = ids[id][0];
    const randomId = id + 1
    setInputValue(randomPokemon)
    console.log(randomPokemon, randomId, ids.length)
    setPokemon((prevState) => {
      return { ...prevState, name: randomPokemon, id: randomId };
    });

    setShouldUpdatePokemonData(true)
  }

  return (
    <Grid
      className="fusion-input"
      templateColumns={"repeat(2, 1fr)"}
      templateRows={"repeat(2, 1fr)"}
    >
      <GridItem colSpan={1} maxH="3vh">
        <label htmlFor={`${inputFor}-input`}>
          Pokemon {inputFor.slice(-3)}
        </label>
      </GridItem>
      <GridItem colSpan={1} textAlign="right" maxH="3vh">
        <button onClick={randomize} tabindex="-1">Randomize</button>
      </GridItem>
      <GridItem colSpan={2} maxH="3vh">
        <input
          id={`${inputFor}-input`}
          name={`${inputFor}-input`}
          list={`${inputFor}-list`}
          placeholder="choose your pokemon"
          value={inputValue}
          onChange={handleChange}
          disabled={isLoading}
        />
        <datalist id={`${inputFor}-list`}>
          {ids.map((id) => (
            <option key={id[1]} value={id[0]} data-id={id[1]} />
          ))}
        </datalist>
      </GridItem>
    </Grid>
  );
};

export default FusionInput;
