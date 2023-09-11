export const plantType = {
  wheat: {
    cropName: "wheat",
    isBlocked: false,
    growTime: 3500,
    howThirsty: 2,
    seed: "🫘",
    seedling: `<div class="wheat-seedling">
    <div class="w-leaf1"></div>
    <div class="w-leaf2"></div>
    <div class="w-leaf3"></div>
    <div class="w-leaf4"></div>
  </div>`,
    ready: "🌾",
    droppedSeeds: 2, //maybe sell seeds in bulk in the future, or they rot
    buyPrice: 1,
    sellPrice: 2,
  },
  corn: {
    cropName: "corn",
    isBlocked: true,
    growTime: 5000,
    howThirsty: 5,
    seed: "🫘",
    seedling: `<div class="corn-seedling">
    <div class="corn-leaf1"></div>
    <div class="corn-leaf2"></div>
  </div>`,
    ready: "🌽",
    droppedSeeds: 4,
    buyPrice: 2,
    sellPrice: 3,
  },
  carrot: {
    cropName: "carrot",
    isBlocked: true,
    growTime: 2000,
    howThirsty: 3,
    seed: "𓇢",
    seedling: `<div class="carrot-seedling">
    <div class="c-leaf1"></div>
    <div class="c-leaf2"></div>
    <div class="c-leaf3"></div>
</div>`,
    ready: "🥕",
    droppedSeeds: 2,
    buyPrice: 3,
    sellPrice: 6,
  },
  onion: {
    cropName: "onion",
    isBlocked: true,
    growTime: 2500,
    howThirsty: 3,
    seed: "𓇢",
    seedling: `<div class="onion-seedling">
    <div class="o-leaf"></div>
</div>`,
    ready: "🧅",
    droppedSeeds: 5,
    buyPrice: 1,
    sellPrice: 3,
  },
};
