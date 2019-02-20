
function getFirstSelector(selector) {
  console.log(selector);
  return document.querySelector(`${selector}`)

}
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

// function increaseRankBy(n){
//   let accarray = []
//   let test = document.querySelectorAll(".ranked-list")
//   test.forEach((element)=> {element.querySelectorAll("li").forEach((el)=>{accarray.push(el)})})
//   accarray.forEach((li)=> {li.innerText = (parseInt(li.innerText) + n)})
// }
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
