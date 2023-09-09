import { ActionButton } from "./actionBtn";
import { actionTypes } from "./enums/enum";
import { player } from './player';


export function createEl(type, newClass, newId, newText, parent) {
  const el = document.createElement(type);
  if (Array.isArray(newClass)) {
    el.classList.add(...newClass);
  } else {
    el.classList.add(newClass);
  }
  if (newId !== '') {
    el.setAttribute("id", newId);
  }
  el.innerText = newText;
  parent.appendChild(el);
  return el;
}

export function createNestedDivEl(parent, infoToDisplayInP, newClass) {
  const newDiv = Object.entries(infoToDisplayInP).forEach(value => {
    const parentDiv = createEl('div', 'p-parent', '', '', parent); 
    const pText = Array.from(value[1]);
    const oneP = createEl('p', newClass, value[0] + '-symbol', pText[0], parentDiv);
    createEl('p', newClass, value[0] + '-value', pText.slice(1).join(''), parentDiv);
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
}

export function sellProduce(sellPrice) {
  player.cash += sellPrice;
  const currentCash = document.getElementById('cash-value');
  currentCash.innerText = parseInt(currentCash.innerText) + sellPrice;
}
