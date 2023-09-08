import { ActionButton } from "./actionBtn";
import { SoilBlock } from "./soilBlock";
import { actionTypes, soilStages } from "./enums/enum";
import { createEl } from "./acts";
import { plantType } from "./enums/plantEnums";
import { SeedSelectionBtn } from "./seedSelectionBtn";

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
  const plantSelectionBar = createEl("table", "selection-tbl", "", "", mainDiv);
  Object.entries(seedSelection).forEach(
    (e) =>
      new SeedSelectionBtn(e[0], "seed-choice-btn", e[1], plantSelectionBar)
  );
}

function startGame() {
  createElBoard(12, 8);
  createActionBar(actionTypes);
  createPlantSelection(plantType);
}

startGame();
