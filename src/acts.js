import { ActionButton } from "./actionBtn";
import { actionTypes } from "./enums/enum";
import { player } from "./player";

export function createEl(type, newClass, newId, newText, parent) {
  const el = document.createElement(type);
  if (Array.isArray(newClass)) {
    el.classList.add(...newClass);
  } else {
    el.classList.add(newClass);
  }
  if (newId !== "") {
    el.setAttribute("id", newId);
  }
  el.innerText = newText;
  parent.appendChild(el);
  return el;
}

export function createNestedDivEl(parent, infoToDisplayInP, newClass) {
  const newDiv = Object.entries(infoToDisplayInP).forEach((value) => {
    const parentDiv = createEl("div", "p-parent", "", "", parent);
    const pText = Array.from(value[1]);
    const oneP = createEl(
      "p",
      newClass,
      value[0] + "-symbol",
      pText[0],
      parentDiv
    );
    createEl(
      "p",
      newClass,
      value[0] + "-value",
      pText.slice(1).join(""),
      parentDiv
    );
  });
}

export function action(needsAction, nextAction) {
  if (!needsAction.childElementCount === 0) {
    needsAction.removeChild(needsAction.lastElementChild);
  }
  needsAction.innerText = nextAction;
}

export function updateSeedBtn(selectedCrop) {
  const parent = document.getElementById("seed-btn");
  parent.innerText = selectedCrop.ready;
  console.log(selectedCrop.ready, "updateseedbtn");
  updateCursor(actionTypes.seed);
}

export function updateCursor(emoji) {
  //if is not type of seed/crop change emoji back to seed
  const parent = document.getElementsByClassName("soil-tbl")[0];
  const newCursor =
    `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='68' height='68' style='font-size:36px;'><text y='45%'>` +
    emoji +
    `🧑‍🌾</text></svg>") 16 0, auto`;
  parent.style.cursor = newCursor;
  taxesTimer();
}

export function sellProduce(sellPrice) {
  player.cash += sellPrice;
  const currentCash = document.getElementById("cash-value");
  currentCash.innerText = parseInt(currentCash.innerText) + sellPrice;
}

export function pickDroppedSeeds(seedType) {
  Object.entries(player.stock).forEach((seedStock) => {
    if (seedStock[0].includes(seedType.cropName)) {
      player.stock[seedStock[0]] = seedStock[1] + seedType.droppedSeeds;
    }
  });
}

export function payTaxes(playerMoney) {
  //could possibly just do a setTimeout(function, 6000)
  //call taxesTimer() everytime the parseInt(new Date().getSeconds()) is 00
  //taxes are based on player money
  // after x amount of time the player gets taxed 23% of it's money
  //if not enough money player gets killed
}

export function taxesTimerCountdown() {
  let seconds = 60;
  function tickTock() {
    //getCounter div //need to create outside
    seconds--;
    //change the text of the getCounterdiv to display new seconds 
  }
  setTimeout(tickTock, 1000);
}
