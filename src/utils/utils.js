// export function askForWater(needsWater) {
//   const waterDiv = document.createElement("div");
//   waterDiv.classList.add("req-h2o");
//   waterDiv.innerText = "💧";
//   needsWater.appendChild(waterDiv);
// } //to be replaced

import { createEl } from "../acts";

//on click element ask for action
export function askForX(needyTxt, classNeeds, parent) {
  console.log(parent);
  createEl('div', classNeeds, needyTxt, needyTxt, parent) 
}

//money handle
