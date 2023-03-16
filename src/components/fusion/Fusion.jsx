import React, { useEffect, useState } from "react";

// components
import Sprite from "./Sprite";
import Types from "./Types";
import Stats from "./Stats";
import Abilities from "./Abilities";
import TypeEffectiveness from "./TypeEffectiveness";

// utils
import tempFusedNameGenerator from "../../utils/tempFusedNameGenerator";

const Fusion = ({ head, body }) => {
  const [fusedName, setFusedName] = useState(""); // Fusion of head & body names
  const [fusionDexNum, setFusionDexNum] = useState(0); // 421 ~ 176820
  const [isCustom, setIsCustom] = useState(0); // Custom sprite check
  const [fusionId, setFusionId] = useState(""); // (###.###)
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

      // Combines head and body names (not using real in-game formula yet)
      setFusedName(tempFusedNameGenerator(head.name, body.name));
    }
  }, [head, body]);

  return (
    <div id={`${head.id}.${body.id}`}>
      <span>{fusedName}</span> {/* todo - replace w/ real fused names */}
      <span>{fusionDexNum ? fusionDexNum : ""}</span>
      <span className={isCustom ? "custom" : "not-custom"}>{fusionId}</span>
      <span>{names}</span>
      <Sprite head={head} body={body} setIsCustom={setIsCustom} />
      <Types
        head={head}
        body={body}
        fusionType={fusionType}
        setFusionType={setFusionType}
      />
      <Stats head={head} body={body} />
      <Abilities head={head} body={body} />
      {/* todo - type effectiveness component */}
      <TypeEffectiveness />
      <hr />
    </div>
  );
};

export default Fusion;
