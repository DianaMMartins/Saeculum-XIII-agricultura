export class Plant {
    constructor(seedType, poop = 0 , coin = 1) {
        this.seedType = seedType;
        this.h2oRequired = 3;
        this.poopRequired = poop;
        this.growTime = 3000;
        this.sellPrice = coin;
    }   
}