import { actionTypes } from './enums/enum';

export class Player {
  constructor(seedType) {
    this.playerAct = actionTypes.plow
    this.seedType = seedType;
    this.cash = 0;
    this.stock = {};
  }

  updateSeedType(newSelection) {
    
    addEventListener('click', (e) => {
      const buttons = document.getElementsByClassName('plant-selection');
      console.log(buttons);
    })
  }

  sellCrop(crop){
    this.cash += crop.sellPrice;
  }
}
