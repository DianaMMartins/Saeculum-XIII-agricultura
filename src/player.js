import { actionTypes } from './enums/enum';

export class Player {
  constructor(seedType) {
    this.playerAct = actionTypes.plow
    this.seedType = seedType;
    this.cash = 0;
    this.stock = {};
  }

  sellCrop(crop){
    this.cash += crop.sellPrice;
  }
}
