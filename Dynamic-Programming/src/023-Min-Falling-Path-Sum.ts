// https://leetcode.com/problems/minimum-falling-path-sum/
// Time: O(n) | Space: O(1)
const minFallingPathSum = (matrix: number[][]): number => {
  if (matrix.length === 1) return Math.min(...matrix[0])

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const topUp = matrix[i - 1][j]
      const topDiagLeft = matrix[i - 1][j - 1] ?? Infinity
      const topDiagRight = matrix[i - 1][j + 1] ?? Infinity

      matrix[i][j] += Math.min(topUp, topDiagLeft, topDiagRight)
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
export {}
