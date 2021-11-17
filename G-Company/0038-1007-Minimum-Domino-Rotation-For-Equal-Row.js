var minDominoRotations = function (tops, bottoms) {
  const ans = Math.min(
    helper(tops[0], tops, bottoms),
    helper(bottoms[0], tops, bottoms)
  )
  return ans === Infinity ? -1 : ans
}

const helper = (target, tops, bottoms) => {
  let flip1 = 0
  let flip2 = 0

  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== target && bottoms[i] !== target) return Infinity
    if (tops[i] !== target) flip1++
    if (bottoms[i] !== target) flip2++
  }

  return Math.min(flip1, flip2)
}
