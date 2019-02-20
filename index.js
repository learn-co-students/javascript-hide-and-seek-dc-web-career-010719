function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const items = [...document.querySelectorAll('#grand-node div:last-child')];
  return items[items.length-1];
}

function increaseRankBy(n) {
  const items = document.querySelectorAll('.ranked-list li');
  [...items].forEach(el => {
    const inc = parseInt(el.innerHTML) + n;
    // console.log(el, inc);
    el.innerHTML= inc;
  });
}