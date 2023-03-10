import React from "react";

const getTypeUrl = (type) => {
  return `https://raw.githubusercontent.com/Aegide/Aegide.github.io/master/types/${type}.png`;
};

const Types = ({ head, body }) => {
  let type = { primary: "", secondary: "" };

  // Handle if the pokemon has a self fusion exception
  if (head.name === body.name && head.selfFusion[0] && body.selfFusion[0]) {
    type.primary = head.selfFusion[1].primary;
    type.secondary = head.selfFusion[1].secondary;
  }

  // Check if type is already set and both pokemon have necessary data
  if (!type.primary && head.fusionTypes.primary && body.fusionTypes.primary) {
    // Always use head's primary type
    type = { primary: head.fusionTypes.primary, secondary: "" };

    // If the body has no secondary type
    if (!body.fusionTypes.secondary) {
      // If they don't share a primary type, pass the body's primary instead
      if (head.fusionTypes.primary !== body.fusionTypes.primary)
        type.secondary = body.fusionTypes.primary;
      // Otherwise, the type variable will use the shared type
      // If the head is already passing the body's secondary, pass the primary
    } else if (
      head.fusionTypes.primary === body.fusionTypes.secondary ||
      !body.fusionTypes.secondary
    ) {
      type.secondary = body.fusionTypes.primary;
      // Else pass head's primary and body's secondary as expected
    } else {
      type.secondary = body.fusionTypes.secondary;
    }
  }

  return (
    <div>
      {type.primary && <img src={getTypeUrl(type.primary)} alt="" />}
      {type.secondary && <img src={getTypeUrl(type.secondary)} alt="" />}
    </div>
  );
};

export default Types;
