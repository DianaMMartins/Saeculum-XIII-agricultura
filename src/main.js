import { ActionButton } from "./actionBtn";
import { SoilBlock } from "./soilBlock";
import { actionTypes, icons, soilStages } from "./enums/enum";
import {
  createEl,
  createNestedDivEl,
  taxesTimerCountdown,
  createOverlay, buyYourLand
} from "./acts";
import { plantType } from "./enums/plantEnums";
import { SeedSelectionBtn } from "./seedSelectionBtn";
import { player } from "./player";
import { gameMenu, tutorial } from "./enums/overlayEnum";

export const mainDiv = document.getElementById("page");
const soilArray = [];
const screenWidth = window.screen.width;

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
  playerInfo.cash;
  const infoToDisplay = {
    cash: [icons.coin, playerInfo.cash],
    tithe: [icons.crown, 23 + "%"], // needs to be a tax function
    timer: [icons.time, 60] //needs to be a timer function taxesTimerCountdown
  };
  createNestedDivEl(playerInfoBar, infoToDisplay, "p-divs");
}

function createBuyLandButton() {
  const buyLand = [icons.coin, player.goal];
  const parent = document.getElementsByClassName('player-info')[0];
  const buttonToBuy = createEl(
    "button",
    "buy-land",
    "",
    "buy your land!",
    parent
  );
  createEl("p", "", "", buyLand, buttonToBuy);
  buyYourLand(buttonToBuy);
}

createOverlay(gameMenu, mainDiv);

const newGame = document.getElementsByClassName("overlay")[0];

newGame.addEventListener("click", () => {
  mainDiv.removeChild(newGame);
  createOverlay(tutorial, mainDiv);
  createMenu();
});

function createMenu() {
  const gameTutorial = document.getElementById("game-tutorial");
  gameTutorial.addEventListener("click", () => {
    mainDiv.removeChild(gameTutorial);
    startGame();
  });
}

export function startGame() {
  if (screenWidth > 1200) {
    createElBoard(10, 8);
  } else if (screenWidth > 768 && screenWidth < 1200) {
    createElBoard(9, 8);
  } else if (screenWidth > 600 && screenWidth < 768) {
    createElBoard(8, 8);
  } else if (screenWidth > 375 && screenWidth < 600) {
    createElBoard(6, 7);
  } else {
    createElBoard(4, 8);
  }
  createActionBar(actionTypes);
  createPlantSelection(plantType);
  createPlayerInfo(player);
  taxesTimerCountdown();
  createBuyLandButton();
}
