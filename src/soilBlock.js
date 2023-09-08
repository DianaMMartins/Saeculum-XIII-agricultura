import { createEl, action } from "./acts";
import { actionTypes, soilRequests, soilStages } from "./enums/enum";
import { Player } from "./player";
// import { plantType } from './enums/plantEnums';

export class SoilBlock {
  constructor(plant, x, y, parentLine) {
    this.plant = plant; //plant type
    this.positionX = x;
    this.positionY = y;
    this.soilClass = ["soil"];
    this.seedPlanted = Player.seedType; //player should choose and then 
    this.soilAct = soilStages.empty; //
    this.counter = 0;
    this.isGrowing = false; //should be from seed selected
    this.soil = createEl(
      "div",
      "soil",
      x,
      plant,
      parentLine,
      this.width,
      this.height
    );

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
            this,
            soilStages.plowed,
            "poop-me",
            actionTypes.poop
          );
        } else if (
          this.soilAct === soilStages.plowed &&
          Player.playerAct === soilRequests.poop
        ) {
          //get seedPlanted.seed
          console.log(this.seedPlanted, 'checking');
          this.updateSoil(
            this,
            soilStages.pooped,
            "seed-me",
            actionTypes.seed
          );
        } else if (
          this.soilAct === soilStages.pooped &&
          Player.playerAct === soilRequests.seed
        ) {
          //check this.plantType.seed selected
          // update this.seedtype to seed selected
          // console.log(this.seedPlanted.seedling);
          this.updateSoil(
            this,
            this.seedPlanted.seed,
            "water-me",
            actionTypes.h2o
          );
        } else if (
          this.soilAct === soilStages.seeded &&
          Player.playerAct === soilRequests.h2o
        ) {
          if (!this.isGrowing) {
            this.soil.removeChild(this.soil.lastChild);
            this.isGrowing = true;
            setTimeout(
              this.growPlant,
              this.seedPlanted.growTime,
              this,
              this.seedPlanted.howThirsty,
              this.seedPlanted.seedling,
              actionTypes.h2o
            );
          }
          if (this.counter === this.seedPlanted.howThirsty) {
            this.updateSoilAct(soilStages.seedling);
          }
        } else if (
          this.soilAct === soilStages.seedling &&
          Player.playerAct === soilRequests.h2o
        ) {
          if (!this.isGrowing) {
            this.soil.removeChild(this.soil.lastChild);
            this.isGrowing = true;
            setTimeout(
              this.growPlant,
              this.seedPlanted.growTime,
              this,
              this.seedPlanted.howThirsty,
              this.seedPlanted.ready,
              actionTypes.pick
            );
          }
          if (this.counter === this.seedPlanted.howThirsty) {
            this.updateSoilAct(soilStages.ready);
          }
        } else if (
          this.soilAct === soilStages.ready &&
          Player.playerAct === soilRequests.pick
        ) {
          this.updateSoil(
            this,
            soilStages.empty,
            "plow-me",
            actionTypes.plow
          );
          //on pick, based on player seed type added to 'this' adds up the right amount of money
          //add coin logic
        }
      }
    });
  }

  updateSeedPlanted(newSeed) {
    this.seedPlanted = newSeed;
  }

  updateSoil(parent, nextSoilAction, newDivClass, nextAction) {
    action(parent.soil, nextSoilAction);
    createEl("div", ["req", newDivClass], nextAction, nextAction, parent.soil);
    this.updateSoilAct(nextSoilAction);
  }

  updateSoilAct(newSoilAct) {
    this.soilAct = newSoilAct;
  }

  growPlant(parent, nRounds, nextSoilStage, nextAction) {
    if (parent.counter < nRounds) {
      createEl(
        "div",
        ["req", "water-me"],
        actionTypes.h2o,
        actionTypes.h2o,
        parent.soil
      );
      parent.counter++;
    } else {
      action(parent.soil, nextSoilStage);
      createEl("div", ["req", "water-me"], nextAction, nextAction, parent.soil);
      parent.counter = 0;
    }
    parent.isGrowing = false;
  }
}
