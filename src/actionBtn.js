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
          console.log(Player.playerAct, "player");

          break;
        case "poop-btn":
          Player.playerAct = actionTypes.poop;
          console.log(Player.playerAct, "player");
          break;
        case "seed-btn":
          Player.playerAct = actionTypes.seed;
          console.log(Player.playerAct, "player");

          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          console.log(Player.playerAct, "player");

          break;
        case "harvest-btn":
          Player.playerAct = actionTypes.pick;
          console.log(Player.playerAct, 4);

        // Player.cash++; //this can be a whole thing based on plant
      }
    });
  }
}
