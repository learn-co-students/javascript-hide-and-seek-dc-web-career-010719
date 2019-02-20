
function getFirstSelector(selector){
  let result = document.querySelector(selector)
  return result
}
function nestedTarget(){
  let result = document.querySelector('.target')
  return result
}

function deepestChild(){
  let result = document.querySelector('#grand-node div div div div')
  return result
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = list.length; i < l; i++) {
      let children = list[i].children;

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
  }
