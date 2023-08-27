export class Player {
  constructor(seedType) {
    this.playerAct = 0
    this.seedType = seedType;
    this.cash = 0;
    this.stock = {};
  }

  setPlayerAct(newAct) {
    this.playerAct = newAct;
  }
}
