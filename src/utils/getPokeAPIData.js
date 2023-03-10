import * as ifData from "../data/infiniteFusionData";

const cacheName = "pokeapi-cache";

export async function getPokeAPIData(pokemon) {
  let pokemonName = pokemon;
  if (ifData.namesFix[pokemon]) pokemon = ifData.namesFix[pokemon];

  const cache = await caches.open(cacheName);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const request = new Request(url, { method: "GET" });

  let pokeApiData;
  const data = {};
  const cachedResponse = await cache.match(request);

  // Transform stats data, check exceptions
  const transformStats = (pokemonName, apiStats) => {
    let stats = ifData[`${pokemonName}Stats`]
      ? ifData[`${pokemonName}Stats`]
      : apiStats;
    return {
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      specialAttack: stats[3].base_stat,
      specialDefense: stats[4].base_stat,
      speed: stats[5].base_stat,
    };
  };

  // Transform ability data, check exceptions
  const transformAbilities = (pokemon, apiAbilities) => {
    // Check for ability exceptions in game data
    if (ifData[`${pokemon}Abilities`]) {
      return ifData[`${pokemon}Abilities`];
    }
    // Swap first two abilities if pokemon is in abilitySwap data
    if (ifData.abilitySwap.includes(pokemon)) {
      return [
        apiAbilities[1],
        apiAbilities[0],
        apiAbilities[2] ? apiAbilities[2] : null,
      ];
    }

    return apiAbilities;
  };

  if (cachedResponse) {
    // Resource is already in cache, return it
    console.log("cache");
    pokeApiData = await cachedResponse.json();
  } else {
    console.log("http request");
    const response = await fetch(url);
    // Cache the response
    await cache.put(request, response.clone());
    pokeApiData = await response.json();
  }

  // Check if self fusion type exceptions exist
  if (ifData.selfFusionTypes[pokemon]) {
    data.selfFusion = [
      true,
      {
        primary: ifData.selfFusionTypes[pokemon][0],
        secondary: ifData.selfFusionTypes[pokemon][1],
      },
    ];
  }

  // Set stats based on exceptions
  data.stats = transformStats(pokemonName, pokeApiData.stats);

  // Set abilities based on exceptions
  data.abilities = transformAbilities(pokemonName, pokeApiData.abilities);

  // Set actual pokemon types
  data.types = {
    primary: pokeApiData.types[0].type.name,
    secondary: pokeApiData.types[1] ? pokeApiData.types[1].type.name : "",
  };

  // Swap types for fusion if exception exists, otherwise fuse w/ data.types
  data.fusionTypes = ifData.typeSwap[pokemon]
    ? {
        primary: ifData.typeSwap[pokemon][0],
        secondary: ifData.typeSwap[pokemon][1],
      }
    : data.types;

  return data;
}
