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
  goal: 100,
  score: {
    'cash made': 0,
    'plants grown': 0,
    'land': 0,
    'time spent': 0,
  },
  finalScore: function() {
    const countable = this.score['cash made'] + this.score['plants grown'];
    const timer = document.getElementById("timer-value").innerText;
    const timeCalculated = toString(this.score['time spent'] * 60) + timer.slice(1) ;
    const landCalculated = this.score['land'] * 10000;
    
    return scoreboard = {
      'total' : countable + landCalculated,
      'time spent': timeCalculated, 
    };
  }
};
