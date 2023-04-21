import React, { useEffect, useState } from "react";

// components
import Sprite from "./Sprite";
import Types from "./Types";
import Stats from "./Stats";
import Abilities from "./Abilities";
import TypeEffectiveness from "./TypeEffectiveness";

// utils
import getFusedNames from "../../utils/fusedPokemonNames";
import getSpriteCredits from "../../utils/getSpriteCredits";

const Fusion = ({ head, body }) => {
  const [fusedName, setFusedName] = useState(""); // Fusion of head & body names
  const [fusionDexNum, setFusionDexNum] = useState(0); // 421 ~ 176820
  const [isCustom, setIsCustom] = useState(0); // Custom sprite check
  const [fusionId, setFusionId] = useState(""); // (###.###)
  const [fusionCredits, setFusionCredits] = useState(""); // sprite credits
  const [names, setNames] = useState(""); // head/body
  const [fusionType, setFusionType] = useState({
    primary: "",
    secondary: "",
  });

  useEffect(() => {
    if (head.id && body.id) {
      // Calculates unique in-game pokedex # for the fusion
      setFusionDexNum(head.id + 420 * body.id);

      // Fusion id formatted as fusionDexNum ids stringed together (###.###)
      setFusionId(`(${head.id}.${body.id})`);

      // Names of pokemon in head/body format
      setNames(
        `${head.name.charAt(0).toUpperCase() + head.name.slice(1)}/` +
          `${body.name.charAt(0).toUpperCase() + body.name.slice(1)}`
      );

      // Combines head and body names (function provided by Exadi#1248)
      // https://github.com/Exadi
      setFusedName(getFusedNames(head.id, body.id)[0]);
      getSpriteCredits(fusionId.slice(1, -1), setFusionCredits);
    }
  }, [head, body]);

  return (
    <div id={`${head.id}.${body.id}`} className="fusion-container">
      <div>
        <span className="fusion-name">{fusedName}</span>
        <span>{fusionDexNum ? `#${fusionDexNum}` : ""}</span>
        <span className={isCustom ? "custom" : "not-custom"}>{fusionId}</span>
        <h2 className="fusion-names">{names}</h2>
        <Sprite head={head} body={body} setIsCustom={setIsCustom} />
        <span className="fusion-credits">
          {fusionCredits ? `sprite by ${fusionCredits}` : ""}
        </span>
        <Types
          head={head}
          body={body}
          fusionType={fusionType}
          setFusionType={setFusionType}
        />
        <Stats head={head} body={body} />
        <Abilities head={head} body={body} />
      </div>
      <div>
        <TypeEffectiveness head={head} body={body} fusionType={fusionType} />
      </div>
    </div>
  );
};

export default Fusion;
