import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  extendTheme,
} from "@chakra-ui/react";

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
      async ({ types, stats, abilities, fusionTypes, selfFusion = null }) => {
        await setPokemon({
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
    <ChakraProvider>
      <Box backgroundColor="rgb(27, 24, 34)">
        <Grid maxW="80vw" m="auto" pt="5vh">
          <GridItem m="auto" textAlign="center" mb="5vh">
            <header>
              <h1>Infinite Fusion Calculator</h1>
              <span>
                Based on work by and sourcing images/data from{" "}
                <a href="https://github.com/Aegide" target="_blank">
                  Aegide
                </a>
              </span>
            </header>
          </GridItem>

          <GridItem
            h="7vh"
            className="fusion-input-container"
            backgroundColor="#95acb6"
            mb="1vh"
          >
            <Box w="30%">
              <FusionInput
                setPokemon={setPokemonOne}
                pokemon={pokemonOne}
                inputFor={"pokemonOne"}
              />
            </Box>
            <Box w="70%" className="fusion-input-base">
              <span>{JSON.stringify(pokemonOne.stats)}</span>
            </Box>
          </GridItem>

          <GridItem
            h="7vh"
            className="fusion-input-container"
            backgroundColor="#95acb6"
            mb="1vh"
          >
            <Box w="30%">
              <FusionInput
                setPokemon={setPokemonTwo}
                pokemon={pokemonTwo}
                inputFor={"pokemonTwo"}
              />
            </Box>
            <Box w="70%" className="fusion-input-base">
              <span>{JSON.stringify(pokemonTwo.stats)}</span>
            </Box>
          </GridItem>

          <GridItem>
            <Fusion head={pokemonOne} body={pokemonTwo} />
          </GridItem>

          <GridItem>
            <Fusion head={pokemonTwo} body={pokemonOne} />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
