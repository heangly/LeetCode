var longestLine = function (mat) {
  let row = mat.length
  let column = mat[0].length
  let max = 0

  // generate 3D DP
  const DP = [...Array(row)].map(() =>
    [...Array(column)].map(() => [0, 0, 0, 0])
  )

  // i = row, j = colum, k= direction
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // if it is 1
      if (mat[i][j]) {
        // 4 directions
        // 0:horizontal(->),
        DP[i][j][0] = (j ? DP[i][j - 1][0] : 0) + 1
        // 1:vertical(|),
        DP[i][j][1] = (i ? DP[i - 1][j][1] : 0) + 1
        // 2:diagonal (\),
        DP[i][j][2] = (i && j ? DP[i - 1][j - 1][2] : 0) + 1
        // 3:ani-diagonal (/)
        DP[i][j][3] = (i && j < column - 1 ? DP[i - 1][j + 1][3] : 0) + 1

        max = Math.max(max, ...DP[i][j])
      }
    }
  }
  return max
}

console.log(
  longestLine([
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1]
  ])
)
