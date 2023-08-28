import { createEl } from "./acts";
import { askForX } from "./utils/utils";

export class SoilBlock {
  constructor(plant, x, y, parentLine) {
    this.plant = plant; //plant type
    this.soilAct = 0; //
    this.positionX = x;
    this.positionY = y;
    this.width = 75;
    this.height = 75;
    this.soilClass = ["soil"];
    this.color = "#cd853f";

    this.soil = createEl("button", "soil", x, plant, parentLine);

    this.soil.addEventListener("click", () => {
      // checks class
      // adds classes
      // askForWater
      // if object class includes no-water and player h2o=can === true
      // doThisAct(actType, onthis.soil)
      if (this.soilAct === 0) {
        console.log("hi");
        createEl('div', "⛏", ["req", "plow-me"], this.soil, needyTxt, parent)
        askForX("⛏", ["req", "plow-me"], this.soil);
      // } else {
      //   this.updateSoil('plowed', '﹏', 1)
      }
    });
  }

  updateSoil(newClass, newText, newAct) {
    // newClass.map((eachNew) => {
    //   this.soilClass.map((eachOld) => { if(eachNew !== eachOld) this.soilClass.push(eachNew)})
    // })
    this.soil.classList.add(newClass);
    this.soil.innerText = newText;
    this.soilAct = newAct;
  }
}
