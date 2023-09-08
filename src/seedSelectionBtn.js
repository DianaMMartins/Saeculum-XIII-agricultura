import { createEl, updateSeedBtn } from "./acts";
import { player } from "./player";
import { actionTypes } from "./enums/enum";

export class SeedSelectionBtn {
  constructor(id, classStr, selectedCrop, parent) {
    this.id = id;
    this.classes = classStr;
    this.selectedCrop = selectedCrop;
    this.isBlocked = selectedCrop.isBlocked;
    this.btn = createEl("button", classStr, "", selectedCrop.ready, parent);
    this.btn.addEventListener("click", () => {
      updateSeedBtn(selectedCrop);
      player.seedType = selectedCrop;
      player.playerAct = actionTypes.seed;
    });
  }
}
