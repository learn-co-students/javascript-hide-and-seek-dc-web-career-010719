function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  let id = document.getElementById('nested')
  return id.querySelector('.target')
}

function increaseRankBy (n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild () {
  let node = document.getElementById('grand-node')
  function treeSearch (node) {
    if (node.children[0]) {
      return treeSearch(node.children[0])
    } else {
      return node
    }
  }
  return treeSearch(node)
}
// alt solution
// let node = document.getElementById('grand-node')
// let nextNode = node.children[0]
//
// while (nextNode) {
//   node = nextNode
//   nextNode = node.children[0]
// }
