import { actionTypes } from "./enums/enum";
import { plantType } from "./enums/plantEnums";

export const player = {
  playerAct: actionTypes.pick,
  seedType: plantType.wheat,
  cash: 0,
  stock: {
    wheatSeeds: 1,
    cornSeeds: 0,
    carrotSeeds: 0,
    onionSeeds: 0,
  },
};
