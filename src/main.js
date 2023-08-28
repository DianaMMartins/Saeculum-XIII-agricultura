import { ActionButton } from "./actionBtn";
import { SoilBlock } from "./soilBlock";
import { actionTypes } from "./enums/enum";
import { createEl } from "./acts";

let mainDiv = document.getElementById("page");
const soilArray = [];
const empty = " ";
const plowed = "﹏"; //🕳️ 🐇 🐿️ 🌰 🦯 🐂🦽 🐃 🛸 🍈 🌶 ⛏ 🌻 🍇 🫱 🖐 🫴 💢 ❔ 🫳 ⚱️ 🦗 💩 🪱 🤎 👑 💠 🏵️🟡💎 🤴 📜 ⏳⌛ 🧮 🧺
const h20 = "💧";
const seedling = "🌱"; //🌿
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
// const h2oTxt = "🚿"; //🚿 ||🌧️
// const plow = "⛏️";
// const seed = "🫘";
// const poop = "💩";
// const harvest = "🧺"; //🫳
const coin = "🪙";

function createElBoard(x, y) {
  const soilBoard = document.createElement("table");
  soilBoard.classList.add("soil-tbl");

  for (let i = 0; i < y; i++) {
    let line = document.createElement("tr");
    line.classList.add("soil-r");
    soilArray.push([]);

    for (let j = 0; j < x; j++) {
      soilArray[i].push(new SoilBlock(empty, j, i, line));
    }
    soilBoard.appendChild(line);
  }
  mainDiv.appendChild(soilBoard);
}

function createActionBar(btnsObj) {
  const actionBar = createEl("table", "action-tbl", "act-bar", "", mainDiv);
  Object.entries(btnsObj).forEach(
    (e) => new ActionButton(e[0] + "-btn", e[1], actionBar)
  );
}

function startGame() {
  createElBoard(12, 8);
  createActionBar(actionTypes);
}

startGame();
