function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const list = document.querySelectorAll('.ranked-list')

    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = parseInt(list[i].innerHTML + n)
    }
}

function deepestChild() {
    const node = document.getElementById('grand-node').querySelectorAll('div')
        return node[node.length-1]
}