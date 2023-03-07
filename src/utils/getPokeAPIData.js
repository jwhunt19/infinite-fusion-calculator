import * as ifData from '../data/infiniteFusionData'

const cacheName = 'pokeapi-cache';

export async function getPokeAPIData(pokemon) {
  let pokemonName = pokemon
  if (ifData.namesFix[pokemon]) pokemon = ifData.namesFix[pokemon]
  
  const cache = await caches.open(cacheName);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const request = new Request(url, { method: "GET" });

  let data;

  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    // Resource is already in cache, return it
    console.log('cache')
    data = await cachedResponse.json();
  } else {
    console.log('http request')
    const response = await fetch(url)
    // Cache the response
    await cache.put(request, response.clone());
    data = await response.json()
  }


  // Check for stat exceptions and replace (use original name for pokemon like aegislash)
  if (ifData[`${pokemonName}Stats`]) data.stats = ifData[`${pokemonName}Stats`]

  // Check for ability exceptions and replace
  if (ifData[`${pokemon}Abilities`]) data.abilities = ifData[`${pokemon}Abilities`]

  // Check for ability swap exceptions, mark as true to be handled in component
  if (ifData.abilitySwap.includes(pokemon)) data['abilitySwap'] = true

  // Check and property for self fusion types
  if (ifData.selfFusionTypes[pokemon]) data['selfFusion'] = ifData.selfFusionTypes[pokemon]

  // Check and create property for type exceptions in fusion
  if (ifData.typeSwap[pokemon]) data['typesFusion'] = ifData.typeSwap[pokemon]


  return data
}
