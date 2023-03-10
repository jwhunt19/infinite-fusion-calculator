import React, { useEffect, useState } from "react";

import Fusion from "./fusion/Fusion";
import FusionInput from "./FusionInput";
import { getPokeAPIData } from "../utils/getPokeAPIData";

const App = () => {
  const [pokemonOne, setPokemonOne] = useState({
    name: "",
    id: null,
    types: {},
    fusionTypes: {},
    abilities: [],
    stats: {},
    selfFusion: [false, {}],
  });

  const [pokemonTwo, setPokemonTwo] = useState({
    name: "",
    id: null,
    types: {},
    fusionTypes: {},
    abilities: [],
    stats: {},
    selfFusion: [false, {}],
  });

  const setPokemonData = async (pokemon, setPokemon) => {
    await getPokeAPIData(pokemon.name).then(
      ({ types, stats, abilities, fusionTypes, selfFusion = null }) => {
        setPokemon({
          ...pokemon,
          types,
          stats,
          abilities,
          fusionTypes,
          selfFusion: selfFusion ? selfFusion : pokemon.selfFusion,
        });
      }
    );
  };

  useEffect(() => {
    if (pokemonOne.name && pokemonTwo.name) {
      setPokemonData(pokemonOne, setPokemonOne);
      setPokemonData(pokemonTwo, setPokemonTwo);
    }
  }, [pokemonOne.name, pokemonTwo.name]);

  return (
    <>
      <h1>Infinite Fusion Calculator</h1>
      <span>
        Based on work by and sourcing images/data from
        <a href="https://github.com/Aegide" target="_blank">
          {" "}
          Aegide
        </a>
      </span>
      <FusionInput
        setPokemon={setPokemonOne}
        pokemon={pokemonOne}
        inputFor={"pokemonOne"}
      />
      <FusionInput
        setPokemon={setPokemonTwo}
        pokemon={pokemonTwo}
        inputFor={"pokemonTwo"}
      />
      <Fusion head={pokemonOne} body={pokemonTwo} />
      <Fusion head={pokemonTwo} body={pokemonOne} />
    </>
  );
};

export default App;
