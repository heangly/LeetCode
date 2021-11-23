/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) return 0

  const dp = Array(matrix.length)
    .fill(0)
    .map((_) => Array(matrix[0].length).fill(0))
  let maxArea = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== '0') {
        dp[i][j] = i > 0 ? dp[i - 1][j] + 1 : 1

        let minHeight = dp[i][j]
        for (let pointer = j; pointer >= 0; pointer--) {
          if (dp[i][pointer] === 0) break

          minHeight = Math.min(minHeight, dp[i][pointer])
          const currArrea = minHeight * (j - pointer + 1)
          maxArea = Math.max(maxArea, currArrea)
        }
      }
    }
  }

  return maxArea
}
