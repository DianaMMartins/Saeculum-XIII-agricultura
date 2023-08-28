export function createEl(type, newClass, newId, newText, parent) {
  const el = document.createElement(type);
  if (Array.isArray(newClass)) {
    el.classList.add(...newClass);
  } else {
    el.classList.add(newClass);
  }
  el.setAttribute("id", newId);
  el.innerText = newText;
  parent.appendChild(el);
  return el;
}

export function action(needsAction) {
  //  console.log(actionableEl);//need to remove oldClasses

}

// export function plowing(needsPlowing) {
//   if (Player.playerAct === 0) {
//     // needsPlowing = true;
//     const toRemove = Object.values(
//       document.getElementsByClassName("req-seed")
//     ).filter((e) => e.parentNode === needsPlowing)[0];
//     needsPlowing.removeChild(toRemove);
//     needsPlowing.classList.remove("no-air");
//     needsPlowing.classList.add("watered");
//   }
// }

// export function watering(needsWater) {
//   if (Player.playerAct === 1) {
//     needsWater = true;
//     const toRemove = Object.values(
//       document.getElementsByClassName("req-h2o")
//     ).filter((e) => e.parentNode === needsWater)[0];
//     needsWater.removeChild(toRemove);
//     needsWater.classList.remove("no-water");
//     needsWater.classList.add("watered");
//   }
// }

// export function planting(needsSeed) {
//   if (Player.playerAct === 2) {
//     needsSeed = true;
//     const toRemove = Object.values(
//       document.getElementsByClassName("req-h2o")
//     ).filter((e) => e.parentNode === needsSeed)[0];
//     needsSeed.removeChild(toRemove);
//     needsSeed.classList.remove("no-water");
//     needsSeed.classList.add("watered");
//   }
// }
