// export function askForWater(needsWater) {
//   const waterDiv = document.createElement("div");
//   waterDiv.classList.add("req-h2o");
//   waterDiv.innerText = "💧";
//   needsWater.appendChild(waterDiv);
// } //to be replaced

import { createEl } from "../acts";

export function askForX(needyTxt, classNeeds, idNeeds, parent) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(classNeeds);
  newDiv.setAttribute("id", idNeeds);
  newDiv.innerText = needyTxt;
  parent.appendChild(newDiv);
}

//money handle