// Time: O(n*m) |  Sapce: O(n*m)
function maximalSquare(matrix: string[][]): number {
  const dp = new Array(matrix.length + 1).fill(null).map(() => new Array(matrix[0].length + 1).fill(0))
  let max = 0

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const valueFromMatrix = matrix[i - 1][j - 1]
      if (valueFromMatrix === '0') continue

      const dpLeft = dp[i][j - 1]
      const dpDiag = dp[i - 1][j - 1]
      const dpTop = dp[i - 1][j]
      dp[i][j] = Math.min(dpLeft, dpDiag, dpTop) + 1
      max = Math.max(max, dp[i][j])
    }
  }

  return max ** 2
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
)
