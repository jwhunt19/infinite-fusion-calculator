import React from "react";

import Stat from "./Stat";
import generateFusionStats from "../../utils/generateFusionStats";

const Stats = ({ head, body }) => {
  const fusedStats = generateFusionStats(head, body);
  const otherFusionStats = generateFusionStats(body, head);

  return (
    <div className="stats">
      {Object.keys(fusedStats).map((statName, i) => (
        <Stat
          stat={fusedStats[statName]}
          comparedStat={otherFusionStats[statName]}
          statName={statName}
          key={head.id && body.id 
            ? `${head.id}.${body.id}-${statName}stat`
            : `${i}-stat-tempkey`}
        />
      ))}
    </div>
  );
};

export default Stats;
