function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankList = document.querySelector('.ranked-list')

  for (let i = 0, l = rankList.length; i < l; i++) {
    let child = rankedList[i].child;

    for (var j = 0, k = child.length; j < k; j++) {
      child[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
