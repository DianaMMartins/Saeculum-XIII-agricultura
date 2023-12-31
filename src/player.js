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
    "cash made": 0,
    "plants grown": 0,
    'land': 0,
    "time spent": 0,
  },
  finalScore: function () {
    const countable = this.score["cash made"] + this.score["plants grown"];
    const timer = document.getElementById("timer-value").innerText;
    let seconds = Math.abs(parseInt(timer.slice(2)) - 60);
    let minutes = this.score["time spent"];
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    const validateSeconds = seconds > 10 ? ":" : ":0";
    const timeCalculated =
      minutes.toString() +
      validateSeconds +
      seconds.toString();
    const landCalculated = this.score["land"] * 10000;

    return {
      "total points": countable + landCalculated,
      "time spent": timeCalculated,
    };
  },
};
