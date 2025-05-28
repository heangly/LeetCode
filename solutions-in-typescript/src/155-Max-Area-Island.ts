// Time: O(n * m) || Space: O(n * m)
function maxAreaOfIsland(grid: number[][]): number {
  let area = 0

  const helper = (i: number, j: number): number => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
      return 0
    }

    grid[i][j] = 0

    const top = helper(i - 1, j)
    const bottom = helper(i + 1, j)
    const left = helper(i, j - 1)
    const right = helper(i, j + 1)

    return 1 + top + bottom + left + right
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area = Math.max(area, helper(i, j))
      }
    }
  }

  return area
}
