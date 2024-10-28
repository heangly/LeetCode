// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// Time: O(n * m) | Space: O(n * m)
const countSquares = (matrix: number[][]): number => {
  let sum = 0
  const dp = new Array(matrix.length + 1)
    .fill(null)
    .map(() => new Array(matrix[0].length + 1).fill(0))

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const originalValue = matrix[i - 1][j - 1]
      if (originalValue === 0) continue
      const left = dp[i][j - 1]
      const diag = dp[i - 1][j - 1]
      const top = dp[i - 1][j]
      dp[i][j] = Math.min(left, diag, top) + 1
      sum += dp[i][j]
    }
  }

  return sum
}

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
  ])
)

console.log(
  countSquares([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
  ])
)

export {}
