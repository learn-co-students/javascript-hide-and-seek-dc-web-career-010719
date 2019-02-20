function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector("#nested .target")
}

function deepestChild() {
    let layer1 = document.querySelector("div#grand-node")
    let layer2 = layer1.children[0]
    while (layer2) {
        layer1 = layer2
        layer2 = layer1.children[0]
    }

    return layer1
}

function increaseRankBy(n) {
    let lists = document.querySelectorAll(".ranked-list")
    for (const list of lists) {
        let children = list.children
        for (let child of children) {
            num = parseInt(child.innerText, 10)
            child.innerText = num + n
        }
    }
}
