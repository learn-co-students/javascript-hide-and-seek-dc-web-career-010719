function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function deepestChild() {
  let list = document.getElementById("grand-node").querySelectorAll("div")
  return list[(list.length) - 1]
}

function increaseRankBy(n) {
  const list = document.querySelectorAll(".ranked-list")
  
  for (let  i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n 
  }
}