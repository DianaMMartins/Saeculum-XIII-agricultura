import { ActionButton } from "./actionBtn";
import { SoilBlock } from "./soilBlock";
import { actionTypes, soilStages } from "./enums/enum";
import { createEl } from "./acts";
import { plantType } from "./enums/plantEnums";

let mainDiv = document.getElementById("page");
const soilArray = [];
const coin = "🪙";

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
  const parent = document.getElementById("act-bar").childNodes[2];
  const plantSelectionButtons = createEl(
    "div",
    "plant-selection",
    "",
    "",
    parent
  );
  Object.entries(seedSelection).forEach(
    (e) => {
      const plant = e[1].ready;
      createEl(
        "div",
        "plant-choice",
        e[0],
        plant,
        plantSelectionButtons
      );
    });
}

function startGame() {
  createElBoard(12, 8);
  createActionBar(actionTypes);
  createPlantSelection(plantType);
}

startGame();
