import React from "react";
import getTypeEffectiveness from "../../utils/getTypeEffectiveness";

const getTypeUrl = (type) => {
  return `https://raw.githubusercontent.com/Aegide/Aegide.github.io/master/types/${type}.png`;
};

const TypeEffectiveness = ({ fusionType, head, body }) => {
  const typeChart = {
    "4x": [],
    "2x": [],
    "1x": [],
    "0.5x": [],
    "0.25x": [],
    "0x": [],
  };

  if (fusionType.primary) {
    getTypeEffectiveness(fusionType, typeChart);
  }

  return (
    <div className="type-chart">
      <label htmlFor="4x"></label>
      <ul></ul>
      {Object.keys(typeChart).map((effectiveness) => (
        <div className="type-dmg">
          <label className="type-label">{effectiveness}: </label>
          <ul className="type-dmg-list">
            {
              typeChart[effectiveness].map((type) => (
                <li >
                  <img className='type-dmg-img' src={getTypeUrl(type)} />
                </li>
              ))
            }
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TypeEffectiveness;
