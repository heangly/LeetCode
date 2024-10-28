// Time: O(N) | Space: O(1)
function minFallingPathSum(matrix: number[][]): number {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let topUp = Infinity
      let topLeft = Infinity
      let topRight = Infinity

      if (i - 1 >= 0) {
        topUp = matrix[i - 1][j]

        if (j - 1 >= 0) {
          topLeft = matrix[i - 1][j - 1]
        }

        if (j + 1 < matrix[0].length) {
          topRight = matrix[i - 1][j + 1]
        }
      }

      matrix[i][j] += Math.min(topUp, topLeft, topRight)
    }
  }

  return Math.min(...matrix[matrix.length - 1])
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9]
  ])
)
