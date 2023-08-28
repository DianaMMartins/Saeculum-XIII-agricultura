import { createEl, action } from "./acts";
import { actionTypes, soilRequests, soilStages } from "./enums/enum";
import { Player } from "./player";

export class SoilBlock {
  constructor(plant, x, y, parentLine) {
    this.plant = plant; //plant type
    this.soilAct = soilStages.empty; //
    this.positionX = x;
    this.positionY = y;
    this.width = 75;
    this.height = 75;
    this.soilClass = ["soil"];
    this.color = "#cd853f";

    this.soil = createEl("button", "soil", x, plant, parentLine);

    this.soil.addEventListener("click", () => {
      if (
        this.soilAct === soilStages.empty &&
        this.soil.childElementCount < 1
      ) {
        const asksFor = createEl(
          "div",
          ["req", "plow-me"],
          actionTypes.plow,
          actionTypes.plow,
          this.soil
        );
      }
      if (
        this.soilAct === soilStages.empty &&
        Player.playerAct === soilRequests.plow
      ) {
        console.log("hi");
        action(this.soil, soilStages.plowed);

        const asksFor = createEl(
          "div",
          ["req", "poop-me"],
          actionTypes.poop,
          actionTypes.poop,
          this.soil
        );
      }
    });
  }
}
