export const plantType = {
  wheat: {
    cropName: "wheat",
    isBlocked: false,
    growTime: 3500,
    howThirsty: 2,
    seed: `<div class="wheat-seed">
    <div class="wheat seed"></div>
  </div>`,
    seedling: `<div class="wheat-seedling">
    <div class="w-leaf1"></div>
    <div class="w-leaf2"></div>
    <div class="w-leaf3"></div>
    <div class="w-leaf4"></div>
  </div>`,
    ready: `<div class="wheat-ready">
    <div class="wheat-head">
      <div class="wheat-leaf"></div>
      <div class="wheat-nub1"></div>
      <div class="wheat-nub1"></div>
      <div class="wheat-nub1"></div>
      <div class="wheat-nub1"></div>
      <div class="wheat-nub1"></div>
    </div>
  </div>`,
    droppedSeeds: 2, //maybe sell seeds in bulk in the future, or they rot
    buyPrice: 1,
    sellPrice: 2,
  },
  corn: {
    cropName: "corn",
    isBlocked: true,
    growTime: 4500,
    howThirsty: 4,
    seed: `<div class="corn-seed">
    <div class="corn seed"></div>
  </div>`,
    seedling: `<div class="corn-seedling">
    <div class="corn-leaf1"></div>
    <div class="corn-leaf2"></div>
  </div>`,
    ready: `<div class="corn-ready">
    <div class="corn-head"></div>
    <div class="corn-leaf"></div>
    <div class="corn-leaf one"></div>
    <div class="corn-nub"></div>
  </div>`,
    droppedSeeds: 4,
    buyPrice: 2,
    sellPrice: 3,
  },
  carrot: {
    cropName: "carrot",
    isBlocked: true,
    growTime: 6000,
    howThirsty: 4,
    seed: `<div class="carrot-seed">
    <div class="carrot seed"></div>
  </div>`,
    seedling: `<div class="carrot-seedling">
    <div class="c-leaf1"></div>
    <div class="c-leaf2"></div>
    <div class="c-leaf3"></div>
</div>`,
    ready: `<div class="carrot-ready">
    <div class="carrot-head"></div>
    <div class="c-leaf3"></div>
  </div>`,
    droppedSeeds: 2,
    buyPrice: 3,
    sellPrice: 6,
  },
  onion: {
    cropName: "onion",
    isBlocked: true,
    growTime: 2500,
    howThirsty: 3,
    seed: `<div class="onion-seed">
    <div class="onion seed"></div>
  </div>`,
    seedling: `<div class="onion-seedling">
    <div class="o-leaf"></div>
</div>`,
    ready: `<div class="onion-ready">
    <div class="onion-head"></div>
    <div class="onion-body"></div>
    <div class="onion-nub"></div>
  </div>`,
    droppedSeeds: 5,
    buyPrice: 1,
    sellPrice: 3,
  },
};
