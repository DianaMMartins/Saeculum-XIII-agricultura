import { createEl } from "./acts";
import { Player } from "./player";
import { actionTypes } from './enums/enum';

export class ActionButton {
  constructor(classStr, innerTxt, parent) {
    this.classList = classStr;
    this.text = innerTxt;

    this.btn = createEl("button", classStr, "act", innerTxt, parent);

    this.btn.addEventListener("click", () => {
      switch (this.classList) {
        case "plow-btn":
          Player.playerAct = actionTypes.plow;
          break;
          case "poop-btn":
            Player.playerAct = actionTypes.poop;  
            break;
        case "seed-btn":
          Player.playerAct = actionTypes.seed;
          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          break;
        case "harvest-btn":
          Player.playerAct = actionTypes.pick;
          console.log(Player.playerAct, 4);

        // Player.cash++; //this can be a whole thing based on plant
      }
    });
  }
}
