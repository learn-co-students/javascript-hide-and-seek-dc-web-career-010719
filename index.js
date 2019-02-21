
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n){
  for(const list of document.querySelectorAll(`.ranked-list`)) {
    for(const child of Array.from(list.children)) {
      child.innerHTML = parseInt(child.innerHTML) + n}}
}

function deepestChild() {
  let outer = document.querySelector(`#grand-node`)
  let inner = outer.children[0];

  while (inner) {
    outer = inner;
    inner = outer.children[0];
  }

  return outer;
}


function deepIterator (target) {
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}
