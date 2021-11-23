var largeGroupPositions = function (S) {
  const res = []
  let start = 0

  for (let i = 1; i <= S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (i - start >= 3) res.push([start, i - 1])
      start = i
    }
  }
  return res
}
