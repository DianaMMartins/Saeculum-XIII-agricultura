import { createEl, action, sellProduce, pickDroppedSeeds } from "./acts";
import { actionTypes, soilRequests, soilStages } from "./enums/enum";
import { player } from "./player";

export class SoilBlock {
  constructor(plant, x, y, parentLine) {
    this.plant = plant;
    this.positionX = x;
    this.positionY = y;
    this.soilClass = ["soil"];
    this.seedPlanted = player.seedType;
    this.soilAct = soilStages.empty;
    this.counter = 0;
    this.isGrowing = false;
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
          player.playerAct === soilRequests.plow
        ) {
          this.updateSoil(this, soilStages.plowed, "poop-me", actionTypes.poop);
        } else if (
          this.soilAct === soilStages.plowed &&
          player.playerAct === soilRequests.poop
        ) {
          this.updateSoil(this, soilStages.pooped, "seed-me", actionTypes.seed);
        } else if (
          this.soilAct === soilStages.pooped &&
          player.playerAct === soilRequests.seed
        ) {
          this.seedPlanted = player.seedType;
          this.updateSoil(
            this,
            this.seedPlanted.seed,
            "water-me",
            actionTypes.h2o
          );
        } else if (
          this.soilAct === this.seedPlanted.seed &&
          player.playerAct === soilRequests.h2o
        ) {
          if (!this.isGrowing) {
            this.soil.removeChild(this.soil.lastChild);
            this.isGrowing = true;
            this.soil.classList.add('watered');
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
            this.updateSoilAct(this.seedPlanted.seedling);
          }
        } else if (
          this.soilAct === this.seedPlanted.seedling &&
          player.playerAct === soilRequests.h2o
        ) {
          if (!this.isGrowing) {
            this.soil.classList.add('watered');
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
            this.updateSoilAct(this.seedPlanted.ready);
          }
        } else if (
          this.soilAct === this.seedPlanted.ready &&
          player.playerAct === soilRequests.pick
        ) {
          this.updateSoil(this, soilStages.empty, "plow-me", actionTypes.plow);
          sellProduce(this.seedPlanted.sellPrice);
          pickDroppedSeeds(this.seedPlanted)
          this.soil.classList.remove('collect');
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
    console.log(nextSoilAction, 'updateSoil');
    this.updateSoilAct(nextSoilAction);
  }

  updateSoilAct(newSoilAct) {
    this.soilAct = newSoilAct;
  }

  growPlant(parent, nRounds, nextSoilStage, nextAction) {
    parent.soil.classList.remove('watered');
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
      console.log(nextAction);
      createEl("div", ["req", "water-me"], nextAction, nextAction, parent.soil);
      parent.counter = 0;
    }
    if (parent.seedPlanted.ready === parent.soilAct) {
      parent.soil.classList.add('collect');
      player.score['plants grown']++;
    }
    parent.isGrowing = false;
  }
}
