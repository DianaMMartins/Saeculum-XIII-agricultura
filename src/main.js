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
    console.log("water true");
    player.wateringCan = true;
  });
}

function askForWater(needsWater) {
  console.log("needs water f");
  const waterDiv = document.createElement("div");
  waterDiv.setAttribute("id", "req-h2o");
  waterDiv.innerText = h20;
  needsWater.appendChild(waterDiv);
}

function wateringAct(needsWater) {
  console.log("watering");
  if (player.wateringCan) {
    const toRemove = document.getElementById("req-h2o");
    toRemove.remove();
    needsWater.classList.remove("no-water");
    needsWater.classList.add("watered");
    //   } else {
    //     const message = "Collect water";
    //     console.log(message);
  }
}

function startPlantGrowth(growing, evolved, classesArray) {
  // console.log(growing.innerText, evolved, 'hi');
  growing.innerText = evolved;
  growing.classList.add(...classesArray);
  askForWater(growing);
}

//could be keydown
//click -> check what it is -> if needs water, ask, -> if watered  make grow
mainDiv.addEventListener("click", (e) => {
  const clickedElement = e.explicitOriginalTarget;
  const checkText = clickedElement.textContent;
  const checkValueOfObject = Object.values(clickedElement.classList);

  //refactor for a switch ?!
  if (checkText.includes(empty)) {
    //refactor into separate function
    clickedElement.innerText = seed;
    const classesToAdd = ["seed", "no-water"];
    clickedElement.classList.add(...classesToAdd);
    askForWater(clickedElement);
    return;
  } else if (checkText.includes(seed)) {
    if (checkValueOfObject.includes("no-water") && player.wateringCan) {
      console.log(clickedElement.classList);
      wateringAct(clickedElement);
      setTimeout(startPlantGrowth, 5000, clickedElement, seedling, ["seedling", "no-water"]);
      return;
    } else if (checkValueOfObject.includes("no-water") && !player.wateringCan) {
      console.log("need water to grow");
    }
  } else if (checkText.includes(seedling)) {
    console.log("seedling");
    // wait for water
    // create timer and water div
    // if water is filled, call changeSprite timer
  } else if (checkText.includes(wheat)) {
    console.log("end");
    // call changeSprite timer
  }
});

function startGame() {
  createSoilBoard(12, 8);
  createH2oBtn();
}

startGame();
