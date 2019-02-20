function getFirstSelector(selector) {
  return document.querySelector(selector);
}

let nestedTarget = function() {
  return document.querySelector('#nested .target');
};

// let increaseRankBy = function(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list')

//   for (let i = 0; i < listenerCount.length; i++)
// }

let deepestChild = function() {
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1];
};

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
