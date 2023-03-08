import React, { useEffect, useState } from "react";

import Fusion from "./fusion/Fusion";
import FusionInput from "./FusionInput";
import { getPokeAPIData } from "../utils/getPokeAPIData";

const App = () => {
  const [pokemon1, setPokemon1] = useState(["", undefined, {}]);
  const [pokemon2, setPokemon2] = useState(["", undefined, {}]);

  useEffect(() => {
    if (pokemon1[0] && pokemon2[0]) {
      // Call API utils function to set response data on states
      setPokemon1(async (prevState) => {
        const newState = [...prevState];
        newState[2] = await getPokeAPIData(pokemon1[0]);
        return newState;
      });
      setPokemon2(async (prevState) => {
        const newState = [...prevState];
        newState[2] = await getPokeAPIData(pokemon2[0]);
        return newState;
      });
    }
  }, [pokemon1, pokemon2]);

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
        setPokemon={setPokemon1}
        pokemon={pokemon1}
        inputFor={"pokemon1"}
      />
      <FusionInput
        setPokemon={setPokemon2}
        pokemon={pokemon2}
        inputFor={"pokemon2"}
      />
      <Fusion head={pokemon1} body={pokemon2} />
      <Fusion head={pokemon2} body={pokemon1} />
    </>
  );
};

export default App;
