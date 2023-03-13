import React from "react";

import Stat from "./Stat";
import generateFusionStats from "../../utils/generateFusionStats";

const Stats = ({ head, body }) => {
  const fusedStats = generateFusionStats(head, body);
  const otherFusionStats = generateFusionStats(body, head);

  return (
    <div className="stats">
      {Object.keys(fusedStats).map((statName) => (
        <Stat
          stat={fusedStats[statName]}
          comparedStat={otherFusionStats[statName]}
          statName={statName}
        />
      ))}
    </div>
  );
};

export default Stats;
