// https://leetcode.com/problems/minimum-path-sum/
// Time: O(n * m) | Space: O(1)
const minPathSum = (grid: number[][]): number => {
  for (let row = 1; row < grid.length; row++) {
    grid[row][0] += grid[row - 1][0]
  }

  for (let col = 1; col < grid[0].length; col++) {
    grid[0][col] += grid[0][col - 1]
  }

  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      const left = grid[row][col - 1]
      const top = grid[row - 1][col]
      grid[row][col] += Math.min(left, top)
    }
  }

  return grid[grid.length - 1][grid[0].length - 1]
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)

export {}
