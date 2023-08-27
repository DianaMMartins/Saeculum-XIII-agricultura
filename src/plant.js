class Plant {
    constructor(seedType, water = 1, poop = 0 , coin = 1) {
        this.seedType = seedType;
        this.h2oRequired = water;
        this.poopRequired = poop;
        this.sellPrice = coin;
    }   
}