import { createEl } from "./acts";
import { Player } from "./player";
import { plantType } from './enums/plantEnums';
export class SeedSelectionBtn {
  constructor(id, classStr, seedSelected, parent) {
    this.id = id;
    this.classes = classStr;
    this.seedSelected = seedSelected;
    this.isBlocked = seedSelected.isBlocked;
    this.btn = createEl("button", classStr, "", seedSelected.ready, parent);
    this.btn.addEventListener("click", () => {
      switch (this.id) {
        case "wheat":
            Player.seedType = seedSelected;
            console.log(Player.seedType);
          break;
        case "corn":
            Player.seedType = seedSelected;
            console.log(Player.seedType);
          break;
        case "carrot":
            Player.seedType = seedSelected;
            console.log(Player.seedType);
          break;
        case "onion":
            Player.seedType = seedSelected;
            console.log(Player.seedType);
          break;
        default:
            Player.seedType = plantType.wheat;
            console.log(Player.seedType);
          break;
      }
    });
  }
}
