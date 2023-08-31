import { createEl, action } from "./acts";
import { actionTypes, soilRequests, soilStages } from "./enums/enum";
import { Player } from "./player";
let counter = 0;

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
    this.isGrowing = false;

    this.soil = createEl("button", "soil", x, plant, parentLine);

    this.soil.addEventListener("click", () => {
      if (!event.detail || event.detail == 1) {
        if (
          this.soilAct === soilStages.empty &&
          this.soil.childElementCount < 1
        ) {
          createEl(
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
          this.updateSoil(
            this.soil,
            soilStages.plowed,
            "poop-me",
            actionTypes.poop
          );
        } else if (
          this.soilAct === soilStages.plowed &&
          Player.playerAct === soilRequests.poop
        ) {
          console.log("gets fertilizer");

          this.updateSoil(
            this.soil,
            soilStages.pooped,
            "seed-me",
            actionTypes.seed
          );
        } else if (
          this.soilAct === soilStages.pooped &&
          Player.playerAct === soilRequests.seed
        ) {
          console.log("gets seed");
          this.updateSoil(
            this.soil,
            soilStages.seeded,
            "water-me",
            actionTypes.h2o
          );
        } else if (
          this.soilAct === soilStages.seeded &&
          Player.playerAct === soilRequests.h2o
        ) {
          const plantTime = 2000;
          const howManyTimesToAskForH2o = 2;
          this.soil.removeChild(this.soil.lastChild);
          setTimeout(
            this.growPlant,
            plantTime,
            this.soil,
            howManyTimesToAskForH2o,
            soilStages.seedling,
            actionTypes.h2o
          );
          if (counter === howManyTimesToAskForH2o) {
            this.updateSoilAct(soilStages.seedling);
          }
        } else if (
          this.soilAct === soilStages.seedling &&
          Player.playerAct === soilRequests.h2o
        ) {
          console.log("next!!!!");
        } else if (
          this.soilAct === soilStages.ready &&
          Player.playerAct === soilRequests.pick
        ) {
          console.log("last!!!!");
        }
      }
    });
  }

  updateSoil(parent, nextSoilAction, newDivClass, nextAction) {
    action(parent, nextSoilAction);
    createEl("div", ["req", newDivClass], nextAction, nextAction, parent);
    this.updateSoilAct(nextSoilAction);
  }

  updateSoilAct(newSoilAct) {
    this.soilAct = newSoilAct;
  }

  growPlant(parent, nRounds, nextSoilStage, nextAction) {
    if (!this.isGrowing) {
      this.isGrowing = true;
      if (counter < nRounds) {
        counter++;
        createEl(
          "div",
          ["req", "water-me"],
          actionTypes.h2o,
          actionTypes.h2o,
          parent
        );
      } else {
        counter = 0;
        action(parent, nextSoilStage);
        createEl("div", ["req", "water-me"], nextAction, nextAction, parent);
      }
    }
    this.isGrowing = false;
  }
}
