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
          this.updateCursor(actionTypes.plow);
          break;
        case "poop-btn":
          Player.playerAct = actionTypes.poop;
          console.log(Player.playerAct, "player");
          this.updateCursor(actionTypes.poop);
          break;
        case "seed-btn":
          //player gets to choose a seed type
          Player.playerAct = actionTypes.seed;
          console.log(Player.playerAct, "player");
          this.updateCursor(actionTypes.seed);
          break;
        case "h2o-btn":
          Player.playerAct = actionTypes.h2o;
          console.log(Player.playerAct, "player");
          this.updateCursor(actionTypes.h2o);
          break;
        case "pick-btn":
          Player.playerAct = actionTypes.pick;
          console.log(Player.playerAct, 4);
          this.updateCursor(actionTypes.pick);
          break;
        // Player.cash++; //this can be a whole thing based on plant
      }
    });
  }

  updateCursor(emoji) {
    const parent = document.getElementsByClassName("soil-tbl")[0];
    const newCursor = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>" + emoji + "</text></svg>\")' 16 0, auto";
    parent.style.cursor = newCursor;
    console.log( newCursor, parent.style.cursor);
  }
}
