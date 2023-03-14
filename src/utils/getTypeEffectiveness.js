const types = {
  'normal': {'weak': ['fighting'], 'resist': [], 'null':['ghost']},
  'fighting': {'weak': ['flying', 'psychic', 'fairy'], 'resist': ['rock', 'bug', 'dark'], 'null':[]},
  'flying': {'weak': ['rock', 'electric', 'ice'], 'resist': ['fighting', 'bug', 'grass'], 'null':['ground']},
  'poison': {'weak': ['ground', 'psychic'], 'resist': ['fighting', 'poison', 'bug', 'grass', 'fairy'], 'null':[]},
  'ground': {'weak': ['water', 'grass', 'ice'], 'resist': ['poison', 'rock'], 'null':['electric']},
  'rock': {'weak': ['water', 'grass', 'fighting', 'ground', 'steel'], 'resist': ['normal', 'flying', 'poison', 'fire'], 'null':[]},
  'bug': {'weak': ['flying', 'rock', 'fire'], 'resist': ['fighting', 'ground', 'grass'], 'null':[]},
  'ghost': {'weak': ['dark', 'ghost'], 'resist': ['poison', 'bug'], 'null':['fighting']},
  'steel': {'weak': ['fighting', 'ground', 'fire'], 'resist': ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'], 'null':['poison']},
  'fire': {'weak': ['water', 'ground', 'rock'], 'resist': ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'], 'null':[]},
  'water': {'weak': ['grass', 'electric'], 'resist': ['steel', 'fire', 'water', 'ice'], 'null':[]},
  'grass': {'weak': ['flying', 'poison', 'bug', 'fire', 'ice'], 'resist': ['ground', 'water', 'grass', 'electric'], 'null':[]},
  'electric': {'weak': ['ground'], 'resist': ['flying', 'steel', 'electric'], 'null':[]},
  'psychic': {'weak': ['bug', 'ghost', 'dark'], 'resist': ['fighting', 'psychic'], 'null':[]},
  'ice': {'weak': ['fighting', 'rock', 'steel', 'fire'], 'resist': ['ice'], 'null':[]},
  'dragon': {'weak': ['ice', 'dragon', 'fairy'], 'resist': ['fire', 'water', 'grass', 'electric'], 'null':[]},
  'dark': {'weak': ['fighting', 'bug', 'fairy'], 'resist': ['ghost', 'dark'], 'null':['psychic']},
  'fairy': {'weak': ['poison', 'steel'], 'resist': ['fighting', 'bug', 'dark'], 'null':['dragon']}
}

export const typeName = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const buildTypeWeaknesses = (type) => {
  const typeEffectiveness = {}

  typeName.forEach((attackType) => {
    if (types[type].weak.includes(attackType)) {
      typeEffectiveness[attackType] = 2
    } else if (types[type].resist.includes(attackType)) {
      typeEffectiveness[attackType] = 0.5
    } else if (types[type].null.includes(attackType)) {
      typeEffectiveness[attackType] = 0
    } else {
      typeEffectiveness[attackType] = 1
    }
  })

  return typeEffectiveness
}

const getTypeEffectiveness = (typeOne, typeTwo = null) => {

  if (typeTwo) {

  } else {
    console.log(buildTypeWeaknesses('fire'))
  }
}

export default getTypeEffectiveness;