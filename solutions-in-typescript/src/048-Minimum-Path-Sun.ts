// Time: O (n * m) | Space: O (n * m)
const minPathSum = (grid: number[][]): number => {
  const dp = new Array(grid.length + 1)
    .fill(null)
    .map(() => new Array(grid[0].length + 1).fill(Infinity))

  // initialize the second row and first column for dp
  dp[1][0] = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const leftValue = dp[i + 1][j]
      const topValue = dp[i][j + 1]

      dp[i + 1][j + 1] = Math.min(leftValue, topValue) + grid[i][j]
    }
  }

  return dp.pop()!.pop()!
}

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
] //7

const grid2 = [
  [1, 2, 3],
  [4, 5, 6]
] //12

console.log(minPathSum(grid1))
console.log(minPathSum(grid2))
