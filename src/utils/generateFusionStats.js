const generateFusionStats = (head, body) => {
  const stats = {};

  // rounds up for numbers ending in .99999999 repeating otherwise round down
  const round = (n) => Math.ceil(n) - n < 0.001 ? Math.ceil(n) : Math.floor(n)

  stats.hp = 
  round((2 / 3) * head.stats.hp + (1 / 3) * body.stats.hp);
  
  stats.attack = 
  round((2 / 3) * body.stats.attack + (1 / 3) * head.stats.attack);

  stats.defense = 
  round((2 / 3) * body.stats.defense + (1 / 3) * head.stats.defense);

  stats.specialAttack = 
  round((2 / 3) * head.stats.specialAttack + (1 / 3) * body.stats.specialAttack);

  stats.specialDefense = 
  round((2 / 3) * head.stats.specialDefense + (1 / 3) * body.stats.specialDefense);

  stats.speed = 
  round((2 / 3) * body.stats.speed + (1 / 3) * head.stats.speed);

  stats.total =
    stats.hp +
    stats.attack +
    stats.defense +
    stats.specialAttack +
    stats.specialDefense +
    stats.speed;

  return stats
};

export default generateFusionStats
