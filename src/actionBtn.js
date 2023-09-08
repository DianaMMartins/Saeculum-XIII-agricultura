import { createEl, updateCursor } from "./acts";
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
          updateCursor(actionTypes.plow);
          break;
        case "poop-btn":
          Player.playerAct = actionTypes.poop;
          updateCursor(actionTypes.poop);
          break;
        case "seed-btn":
          //player gets to choose a seed type
          Player.playerAct = actionTypes.seed;
          updateCursor(actionTypes.seed);
          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          updateCursor(actionTypes.h2o);
          break;
        case "pick-btn":
          Player.playerAct = actionTypes.pick;
          updateCursor(actionTypes.pick);
          // Player.cash++; //this can be a whole thing based on plant
          break;
      }
    });
  }
}
