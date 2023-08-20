let mainDiv = document.getElementById("page");
let soilLayer;
const empty = "﹏";
const plowed = "➿";
const seed = "🫘";
const h20 = "💧";
const seedling = "🌱";
const wheat = "🌾";
const potato = "🥔";
const carrot = "🥕";
const leafy = "🥬";
const corn = "🌽";
const tomato = "🍅";
const pepper = "🫑";
const onion = "🧅";
const garlic = "🧄";
const broccoli = "🥦";
const eggplant = "🍆";
const plow = "⛏️";
const watering = "🚿"; //🚿 ||🌧️

const player = {
  // needs to be an object
  wateringCan: false,
  seed: true,
  seedType: wheat,
  // needs a function that if it has water it can water plants
};

function createSoilBoard(x, y) {
  const soilBoard = document.createElement("table");
  soilBoard.classList.add("soil-tbl");

  for (let i = 0; i < y; i++) {
    const newTR = document.createElement("tr");

    newTR.classList.add("soil-r");

    for (let j = 0; j < x; j++) {
      const newTD = document.createElement("td");
      newTD.classList.add("soil");
      newTD.innerText = empty;
      newTR.appendChild(newTD);
    }
    soilBoard.appendChild(newTR);
    page.appendChild(soilBoard);
  }
}

function createH2oBtn() {
  const h2oBtn = document.createElement("div");
  h2oBtn.classList.add("h2o-btn");
  h2oBtn.innerText = watering;
  page.appendChild(h2oBtn);
  h2oBtn.addEventListener("click", () => {
    player.wateringCan = true;
  });
}

function askForWater(needsWater) {
  const waterDiv = document.createElement("div");
  waterDiv.setAttribute("id", "req-h2o");
  waterDiv.innerText = h20;
  needsWater.appendChild(waterDiv);
}

function wateringAct(needsWater) {
  if (player.wateringCan) {
    const toRemove = document.getElementById("req-h2o");
    toRemove.remove();
    needsWater.classList.remove("no-water");
    needsWater.classList.add("watered");
  } else {
    const message = "Collect water";
    console.log(message);
  }
}

// //addEventListener('click', 'allowBlockChange, 3000)

// function allowBlockChange() {
//   if (timerSoilChange === 3) {
//     timerSoilChange = 0;
//   } else {
//     timerSoilChange++;
//   }
// }

//starts timer and fills timer div
// const changeSprite = document.setTimeout(() => {
//   let square = e.explicitOriginalTarget;
//   let changeSquare = square.innerText;

//   if (changeSquare.length < 3) {
//     if (changeSquare === "") {
//       square.innerText = "🫘";
//     } else if (changeSquare === "🫘") {
//       square.innerText = "🌱";
//     } else if (changeSquare === "🌱") {
//       square.innerText = "🌾";
//     } else if (changeSquare === "🌾") {
//       square.innerText = "";
//     }
//   }
// }, 3000);

//could be keydown
mainDiv.addEventListener("click", (e) => {
  let clickedElement = e.explicitOriginalTarget;
  let checkText = clickedElement.textContent;

  //refactor for a switch ?!
  if (clickedElement.className === "h20-btn") {
    player.wateringCan = true;
  }

  if (checkText.includes(empty)) {
    clickedElement.innerText = seed;
    const classes = ["seed", "no-water"];
    clickedElement.classList.add(...classes);
    askForWater(clickedElement);

    console.log("empty");
  } else if (checkText.includes(seed)) {
    wateringAct(clickedElement);
    console.log("seed");
    // wait for water
    // create timer and water div
    // if water is filled, call changeSprite timer
  } else if (checkText.includes(seedling)) {
    console.log("seedling");
    // wait for water
    // create timer and water div
    // if water is filled, call changeSprite timer
  } else if (checkText.includes(wheat)) {
    console.log("end");
    // call changeSprite timer
  }
  console.log("none", clickedElement, seed, checkText === seed);
});

function startGame() {
  createSoilBoard(12, 8);
  createH2oBtn();
}

startGame();
