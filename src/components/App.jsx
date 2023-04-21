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
  const [isLoading, setIsLoading] = useState(false)
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

  const [shouldUpdatePokemonData, setShouldUpdatePokemonData] = useState(false);

  const setPokemonData = async (pokemon, setPokemon) => {
    setIsLoading(true)
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
    setIsLoading(false)
  };

  useEffect(() => {
    if (pokemonOne.name && pokemonTwo.name && shouldUpdatePokemonData) {
      setPokemonData(pokemonOne, setPokemonOne);
      setPokemonData(pokemonTwo, setPokemonTwo);
      setShouldUpdatePokemonData(false);
    }
  }, [pokemonOne.name, pokemonTwo.name, shouldUpdatePokemonData]);

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
              <span> - </span>
              <span>
                Fused names provided by{" "}
                <a href="https://github.com/Exadi" target="_blank">
                  Exadi
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
                isLoading={isLoading}
                setShouldUpdatePokemonData={setShouldUpdatePokemonData}
              />
            </Box>
            <Box w="70%" className="fusion-input-base">
              <span className="base-pokemon-stats">{JSON.stringify(pokemonOne.stats)}</span>
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
                isLoading={isLoading}
                setShouldUpdatePokemonData={setShouldUpdatePokemonData}
              />
            </Box>
            <Box w="70%" className="fusion-input-base">
              <span className="base-pokemon-stats">{JSON.stringify(pokemonTwo.stats)}</span>
            </Box>
          </GridItem>
          <GridItem className="fusions-container">
              <Fusion head={pokemonOne} body={pokemonTwo} />
              <Fusion head={pokemonTwo} body={pokemonOne} />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
