import { createEl } from "./acts";
import { actionTypes } from "./enums/enum";

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
      if (this.soilAct === 0) {
        console.log("hi");
        const asksFor = createEl(
          "div",
          ["req", "plow-me"],
          actionTypes.plow,
          actionTypes.plow,
          this.soil
        );
        //if playerAct matches soil act do update
      }
    });
  }

  updateSoil(newClass, newText, newAct) {
    this.soil.classList.add(newClass);
    this.soil.innerText = newText;
    this.soilAct = newAct;
  }
}
