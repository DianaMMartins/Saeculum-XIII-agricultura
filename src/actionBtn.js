import { createEl } from "./acts";
import { Player } from "./player";
import { actionTypes } from "./enums/enum";

export class ActionButton {
  constructor(classStr, innerTxt, parent) {
    this.classList = classStr;
    this.text = innerTxt;

    this.btn = createEl("button", classStr, "act", innerTxt, parent);

    this.btn.addEventListener("click", () => {
      switch (this.classList) {
        case "plow-btn":
          Player.playerAct = actionTypes.plow;
          // this.updateCursor(actionTypes.plow);
          break;
        case "poop-btn":
          Player.playerAct = actionTypes.poop;
          // this.updateCursor(actionTypes.poop);
          break;
        case "seed-btn":
          //player gets to choose a seed type
          Player.playerAct = actionTypes.seed;
          // this.updateCursor(actionTypes.seed);
          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          // this.updateCursor(actionTypes.h2o);
          break;
        case "pick-btn":
          Player.playerAct = actionTypes.pick;
          // this.updateCursor(actionTypes.pick);
          break;
        // Player.cash++; //this can be a whole thing based on plant
      }
    });
  }
//NEED TO KNOW IF I CAN USE//
  // updateCursor(emoji) {
  //   const parent = document.getElementsByClassName("soil-tbl")[0];
  //   const newCursor =
  //     `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='68' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='0%'>` +
  //     emoji +
  //     `</text></svg>") 16 0, auto`;
  //   parent.style.cursor = newCursor;
  // }
}
