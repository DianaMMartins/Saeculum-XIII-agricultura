export function createEl(
  type,
  newClass,
  newId,
  newText,
  parent,
  width,
  height
) {
  const el = document.createElement(type);
  if (Array.isArray(newClass)) {
    el.classList.add(...newClass);
  } else {
    el.classList.add(newClass);
  }
  el.setAttribute("id", newId);
  el.innerText = newText;
  parent.appendChild(el);
  // console.log(el.style, height);
  // if (width > 0 && width !== undefined && height > 0 && height !== undefined) {
  //   console.log('hi');
  //   el.style.width = width;
  //   el.style.height = height;
  // }
  return el;
}

export function action(needsAction, nextAction) {
  if (!needsAction.childElementCount === 0) {
    needsAction.removeChild(needsAction.lastElementChild);
  }
  needsAction.innerText = nextAction;
}
