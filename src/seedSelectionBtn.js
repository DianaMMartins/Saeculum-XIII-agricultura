import { createEl } from "./acts";
import { Player } from "./player";
import { plantType } from "./enums/plantEnums";
import { ActionButton } from "./actionBtn";
export class SeedSelectionBtn {
  constructor(id, classStr, selectedCrop, parent) {
    this.id = id;
    this.classes = classStr;
    this.selectedCrop = selectedCrop;
    this.isBlocked = selectedCrop.isBlocked;
    this.btn = createEl("button", classStr, "", selectedCrop.ready, parent);
    this.btn.addEventListener("click", () => {
      ActionButton.prototype.updateSeedBtn(selectedCrop);
    });
  }
}
