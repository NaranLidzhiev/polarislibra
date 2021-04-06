// console.log(document.body.firstElementChild);
//console.log(document.documentElement)
// console.log(document.body.childNodes);
// console.log(document.body.lastchild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}