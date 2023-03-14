import React from "react";

const Stat = ({ stat, comparedStat, statName }) => {
  const statLabels = {
    hp: "HP",
    attack: "ATTACK",
    defense: "DEFENSE",
    specialAttack: "SP. ATK",
    specialDefense: "SP. DEF",
    speed: "SPEED",
    total: "TOTAL",
  };

  const compareFusionStats = (s1, s2) => {
    if (s1 > s2) {
      return "stat-greater";
    }

    if (s1 < s2) {
      return "stat-less";
    }

    if (s1 === s2) {
      return "stat-equal";
    }
  };

  const getDifference = (s1, s2) => {
    let difference = (s1 - s2).toString();

    if (difference === "0") {
      return "(0)";
    }

    if (difference[0] === "-") {
      return `(${difference})`;
    } else {
      return `(+${difference})`;
    }
  };

  const statsCompared = compareFusionStats(stat, comparedStat);
  const statsDifference = getDifference(stat, comparedStat);

  return (
    <div className="stat">
      <span>{statLabels[statName]}</span>
      <div className="stat-value-container">
        {stat && comparedStat ? (
          <span className={`stat-value ${statsCompared}`}>
            {stat} {statsDifference}
          </span>
        ) : (
          <span className="stat-value"></span>
        )}
      </div>
    </div>
  );
};

export default Stat;
