class Sea {
  // @param {integer[]} topRight
  // @param {integer[]} bottomLeft
  // @return {boolean}
  hasShips(topRight, bottomLeft) {}
}

var countShips = function (sea, topRight, bottomLeft) {
  if (
    !sea.hasShips(topRight, bottomLeft) ||
    bottomLeft[0] > topRight[0] ||
    bottomLeft[1] > topRight[1]
  )
    return 0
  if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) {
    return 1
  }

  let midX = Math.floor((topRight[0] + bottomLeft[0]) / 2)
  let midY = Math.floor((topRight[1] + bottomLeft[1]) / 2)
  return (
    countShips(sea, [midX, midY], bottomLeft) +
    countShips(sea, topRight, [midX + 1, midY + 1]) +
    countShips(sea, [midX, topRight[1]], [bottomLeft[0], midY + 1]) +
    countShips(sea, [topRight[0], midY], [midX + 1, bottomLeft[1]])
  )
}
