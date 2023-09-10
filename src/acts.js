import { actionTypes } from "./enums/enum";
import { gameOver } from "./enums/overlayEnum";
import { player } from "./player";
import { mainDiv } from "./main";
import { createOverlay } from "./utils/utils";
import { createEl } from "../acts";


export function createEl(type, newClass, newId, newText, parent) {
  const el = document.createElement(type);

  if (Array.isArray(newClass)) {
    el.classList.add(...newClass);
  } else if (newClass !== '') {
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
}

export function sellProduce(sellPrice) {
  player.cash += sellPrice;
  const newText = parseInt(player.cash);
  console.log(newText, player.cash);
  updatePlayerInfoBar("cash-value", newText);
}

export function pickDroppedSeeds(seedType) {
  Object.entries(player.stock).forEach((seedStock) => {
    if (seedStock[0].includes(seedType.cropName)) {
      player.stock[seedStock[0]] = seedStock[1] + seedType.droppedSeeds;
    }
  });
}

export function updatePlayerInfoBar(elementToUpdate, textToUpdate) {
  document.getElementById(elementToUpdate).innerText = textToUpdate;
}

export function payTaxes() {
  const taxPercentage = 0.23;
  const taxableIncome = player.cash;
  let afterTax = Math.floor(taxableIncome - taxableIncome * taxPercentage);
  player.cash = afterTax;
  updatePlayerInfoBar("cash-value", afterTax);
}

export function taxesTimerCountdown() {
  let seconds = 4;
  function tickTock() {
    const timer = document.getElementById("timer-value");
    seconds--;
    timer.innerText = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tickTock, 1000);
      if (seconds < 11) {
        timer.style.color = "red";
      }
    } else {
      if (player.cash === 0) {
        createOverlay(gameOver, mainDiv);
        //create a clear board function
        const newGame = document.getElementsByClassName("overlay")[0];
        newGame.addEventListener("click", (e) => {
          mainDiv.removeChild(newGame);
          window.location.reload();
        });
      } else {
        seconds = 60;
        timer.style.color = "black";
        taxesTimerCountdown();
        payTaxes();
      }
    }
  }
  tickTock();
}

export function createOverlay(overlayType, parent) {
    const overlayDiv = createEl('div', 'overlay', overlayType.class, '', parent);
    Object.entries(overlayType).forEach(key => {
        if (key[0] !== 'class'){
            if (Array.isArray(key[1])) {
                key[1].forEach(pTag => {
                    createEl('p', 'game-text', '', pTag, overlayDiv)
                })
            } else {
                createEl(key[0], '', '', key[1], overlayDiv);
            }
        }
    })
}
