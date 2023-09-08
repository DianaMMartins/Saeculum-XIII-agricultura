import { createEl, updateCursor } from "./acts";
import { player } from "./player";
import { actionTypes } from "./enums/enum";

export class ActionButton {
  constructor(classStr, innerTxt, parent) {
    this.classList = classStr;
    this.text = innerTxt;

    this.btn = createEl("button", "act", classStr, innerTxt, parent);
    this.btn.addEventListener("click", () => {
      switch (this.classList) {
        case "plow-btn":
          player.playerAct = actionTypes.plow;
          updateCursor(actionTypes.plow);
          break;
        case "poop-btn":
          player.playerAct = actionTypes.poop;
          updateCursor(actionTypes.poop);
          break;
        case "seed-btn":
          player.playerAct = actionTypes.seed;
          updateCursor(actionTypes.seed);
          break;
        case "h2o-btn":
          player.playerAct = actionTypes.h2o;
          updateCursor(actionTypes.h2o);
          break;
        case "pick-btn":
          player.playerAct = actionTypes.pick;
          updateCursor(actionTypes.pick);
          break;
      }
    });
  }
}
