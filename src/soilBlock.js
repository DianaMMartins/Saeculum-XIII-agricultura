import { createEl, plowing, watering } from "./acts";
import { Player } from "./player";
import { askForWater, askForX } from "./utils/utils";

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
      console.log(compare, 3, this.soil, "heelll");

      if (this.soil.innerText === "") {
        askForX("⛏", "req", "plow", this.soil);
      } else {
        const compare = this.soil.firstChild.textContent;
        console.log(compare, 3, this.soil, "heelll");
        if (compare === " ") {
          askForX("🫘", "req", "plant-me", this.soil);
          if (Player.playerAct === 0) {
            this.updateSoil(["plowed"], "﹏");
          }
        }
        if (compare === "plowed") {
          askForX("🫘", "req", "plant-me", this.soil);
          console.log("heiii", compare, this.soil);
          if (Player.playerAct === 1) {
            // this.updateSoil(["seed", "no-water"], "🫘");
          }
          console.log(1);
        }
        //   case "🫘💧":
        //     watering(this.watered);
        //     if (this.soilClass.includes("watered")) {
        //       setTimeout(startPlantGrowth, 2000, this.soil, "🌱", [
        //         "seedling",
        //         "no-water",
        //       ]);
        //     }
        //     console.log(2, this.soil);
        //     break;
        // }
      }
    });
  }

  // soilOnCLick(){
  //   this.soil
  // }

  updateSoil(newClasses, newText, reqAct, reqClasses, reqId) {
    this.soil.classList.add(...newClasses);
    this.soil.title = newClasses[0];
    this.soil.innerText = newText;
    askForX(reqAct, reqClasses, reqId, this.soil);
    console.log("bey", this.soil);
  }

  // updateSoil(newClasses, newText,) {
  //   this.soil.classList.add(...newClasses);
  //   this.soil.title = newClasses[0];
  //   this.soil.innerText = newText;
  //   askForX("⛏", "req", "plow", this.soil);
  //   console.log("bey", this.soil);
  // }

  // doAction() {}
  // onclick EventListner
  // askForWater function

  // startPlantGrowth
}
