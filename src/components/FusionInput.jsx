import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { ids } from "../data/infiniteFusionData.js";

const FusionInput = ({ setPokemon, inputFor }) => {
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
      // Sets name and id on pokemon state
      setPokemon((prevState) => {
        return { ...prevState, name: e.target.value, id: selectedId };
      });
    }
  };

  return (
    <Grid
      className="fusion-input"
      templateColumns={"repeat(2, 1fr)"}
      templateRows={"repeat(2, 1fr)"}
    >
      <GridItem colSpan={1}>
        <label htmlFor={`${inputFor}-input`}>
          Pokemon {inputFor.slice(-3)}
        </label>
      </GridItem>
      <GridItem colSpan={1} textAlign="right">
        <a href="" tabindex="-1">Randomize</a>
      </GridItem>
      <GridItem colSpan={2}>
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
      </GridItem>
    </Grid>
  );
};

export default FusionInput;
