import { ActionButton } from "./actionBtn";
import { SoilBlock } from "./soilBlock";
import { actionTypes, soilStages } from "./enums/enum";
import { createEl, createNestedDivEl } from "./acts";
import { plantType } from "./enums/plantEnums";
import { SeedSelectionBtn } from "./seedSelectionBtn";
import { player } from "./player";

let mainDiv = document.getElementById("page");
const soilArray = [];

function createElBoard(x, y) {
  const soilBoard = document.createElement("div");
  soilBoard.classList.add("soil-tbl");

  for (let i = 0; i < y; i++) {
    let line = document.createElement("div");
    line.classList.add("soil-r");
    line.style.gridRow = i + 1;
    soilArray.push([]);

    for (let j = 0; j < x; j++) {
      soilArray[i].push(new SoilBlock(soilStages.empty, j, i, line));
    }
    soilBoard.appendChild(line);
  }
  mainDiv.appendChild(soilBoard);
}

function createActionBar(btnsObj) {
  const actionBar = createEl("table", "action-tbl", "act-bar", "", mainDiv);
  Object.entries(btnsObj).forEach(
    (e) => new ActionButton(e[0] + "-btn", e[1], actionBar)
  );
}

function createPlantSelection(seedSelection) {
  const plantSelectionBar = createEl("table", "selection-tbl", "", "", mainDiv);
  Object.entries(seedSelection).forEach(
    (e) =>
      new SeedSelectionBtn(e[0], "seed-choice-btn", e[1], plantSelectionBar)
  );
}

function createPlayerInfo(playerInfo) {
  const playerInfoBar = createEl("div", "player-info", "", "", mainDiv);
  playerInfo.cash
    // const cash = '🪙' +  playerInfo.cash;
    // const tithe = '👑' + 23; //10% of your income + 10% to the king
    // const timer = '⏳';
    // const timerEnd = '⌛';
    const infoToDisplay = {
      cash: '🪙' +  playerInfo.cash,
      tithe: '👑' + 23, // needs to be a tax function
      timer: '⏳' + 10, //needs to be a timer function
    }
createNestedDivEl(playerInfoBar, infoToDisplay, 'p-divs')
}

function startGame() {
  createElBoard(12, 8);
  createActionBar(actionTypes);
  createPlantSelection(plantType);
  createPlayerInfo(player);
}

startGame();
