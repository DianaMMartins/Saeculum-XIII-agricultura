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

export function action(needsAction, nextAction) {
  if (!needsAction.childElementCount === 0) { 
    needsAction.removeChild(needsAction.lastElementChild)
  }
  needsAction.innerText = nextAction;
}
