import React from "react";

//the body Pokémon's first ability, or the head Pokémon's second ability.
const Abilities = ({ head, body }) => {
  let fusionAbilities;
  let secondAbility;
  let otherAbilities;
  const headAbilities = [...head.abilities];
  const bodyAbilities = [...body.abilities];

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (headAbilities.length && bodyAbilities.length) {
    fusionAbilities = [capitalize(bodyAbilities[0].ability.name)];
    bodyAbilities.splice(0, 1);

    if (headAbilities[1].is_hidden) {
      secondAbility = capitalize(headAbilities[0].ability.name);
      headAbilities.splice(0, 1);
    } else {
      secondAbility = capitalize(headAbilities[1].ability.name);
      headAbilities.splice(1, 1);
    }

    // set leftover abilities to a set to filter out duplicates
    otherAbilities = [
      ...new Set([
        ...headAbilities.map(({ ability }) => capitalize(ability.name)),
        ...bodyAbilities.map(({ ability }) => capitalize(ability.name)),
      ]),
    ];

    if (secondAbility !== fusionAbilities[0]) {
      fusionAbilities.push(secondAbility);
    }
  }

  return (
    <div className="abilities">
      <div className="fusion-abilities">
        <span>Abilities:</span>
        {fusionAbilities &&
          (fusionAbilities.length === 1 ? (
            <span>{fusionAbilities[0]}</span>
          ) : (
            <span>{`${fusionAbilities[0]} / ${fusionAbilities[1]}`}</span>
          ))}
      </div>
      <div className="other-abilities">
        {otherAbilities &&
          otherAbilities.map((ability) => <span>{ability}</span>)}
      </div>
    </div>
  );
};

export default Abilities;
