import React from "react";

const getTypeUrl = (type) => {
  return `https://raw.githubusercontent.com/Aegide/Aegide.github.io/master/types/${type}.png`;
};

const Types = ({ head, body }) => {
  let type = [];

  // Handle if the pokemon has a self fusion exception
  if (head[0] === body[0] && head[2].selfFusion && body[2].selfFusion) {
    type = head[2].selfFusion;
  }

  if (!type.length && head[2].types && body[2].types) {
    // Grabs types from data. Provides empty string for second type if none exists
    const setTypes = (pokeData) => [
      pokeData.types[0].type.name,
      pokeData.types[1] ? pokeData.types[1].type.name : "",
    ];

    // Check if type exceptions exist, if so use them otherwise call setTypes
    const headTypes = head[2].typesFusion
      ? [head[2].typesFusion[0], ""]
      : setTypes(head[2]);

    const bodyTypes = body[2].typesFusion
      ? [body[2].typesFusion[0], ""]
      : setTypes(body[2]);

    type = [headTypes[0], ""]; // Always use head's primary type

    // If the body has no secondary type
    if (!bodyTypes[1]) {
      // If they don't share a primary type, pass the body's primary instead
      if (headTypes[0] !== bodyTypes[0]) type[1] = bodyTypes[0];
      // Otherwise, the type variable will use the shared type
      // If the head is already passing the body's secondary, pass the primary
    } else if (headTypes[0] === bodyTypes[1] || !bodyTypes[1]) {
      type[1] = bodyTypes[0];
      // Else pass head's primary and body's secondary as expected
    } else {
      type[1] = bodyTypes[1];
    }
  }

  return (
    <div>
      {type.length ? <img src={getTypeUrl(type[0])} alt="" /> : null}
      {type[1] ? <img src={getTypeUrl(type[1])} alt="" /> : null}
    </div>
  );
};

export default Types;
