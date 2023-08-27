import { createEl } from "./acts";
import { Player } from "./player";

export class ActionButton {
  constructor(classStr, innerTxt, parent) {
    this.classList = classStr;
    this.text = innerTxt;

    this.btn = createEl("button", classStr, "act", innerTxt, parent);

    this.btn.addEventListener("click", () => {
      switch (this.classList) {
        case "plow-btn":
          Player.playerAct = 0;
          console.log(Player.playerAct, 0);
          break;
        case "seed-btn":
          Player.playerAct = 1;
          console.log(Player.playerAct, 1);
          break;
        case "h2o-btn":
          Player.playerAct = 2;
          console.log(Player.playerAct, 2);

          break;
        case "poop-btn":
          Player.playerAct = 3;
          console.log(Player.playerAct, 3);

          break;
        case "harvest-btn":
          Player.playerAct = 4;
          console.log(Player.playerAct, 4);

          // Player.cash++; //this can be a whole thing based on plant
      }
    });
  }
}
