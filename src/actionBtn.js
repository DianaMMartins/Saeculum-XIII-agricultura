import { createEl } from "./acts";
import { Player } from "./player";
import { actionTypes } from "./enums/enum";

export class ActionButton {
  constructor(classStr, innerTxt, parent) {
    this.classList = classStr;
    this.text = innerTxt;

    this.btn = createEl("button", "act", classStr, innerTxt, parent);
    this.btn.addEventListener("click", () => {
      switch (this.classList) {
        case "plow-btn":
          Player.playerAct = actionTypes.plow;
          this.updateCursor(actionTypes.plow);
          break;
        case "poop-btn":
          Player.playerAct = actionTypes.poop;
          this.updateCursor(actionTypes.poop);
          break;
        case "seed-btn":
          //player gets to choose a seed type
          Player.playerAct = actionTypes.seed;
          this.updateCursor(actionTypes.seed);
          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          this.updateCursor(actionTypes.h2o);
          break;
        case "pick-btn":
          Player.playerAct = actionTypes.pick;
          this.updateCursor(actionTypes.pick);
          // Player.cash++; //this can be a whole thing based on plant
          break;
      }
    });
  }

  updateCursor(emoji) {
    const parent = document.getElementsByClassName("soil-tbl")[0];
    const newCursor =
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='68' height='68' style='font-size:36px;'><text y='45%'>` +
      emoji +
      `🧑‍🌾</text></svg>") 16 0, auto`;
    parent.style.cursor = newCursor;
  }

  updateSeedBtn(selectedCrop) {
    const parent = document.getElementById("seed-btn");
    //change parent text
    parent.innerText = selectedCrop.ready;
    //call update soil selected crop 
    this.updateCursor(actionTypes.seed);
    console.log('hi',Player.playerAct, selectedCrop);
    //after other action button has been clicked, revert it back!!!
  }
}
