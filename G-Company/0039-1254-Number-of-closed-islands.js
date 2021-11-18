var closedIsland = function (grid) {
  let ans = 0

  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[row].length - 1; col++) {
      if (grid[row][col] === 0) {
        ans += dfs(row, col, grid)
      }
    }
  }

  return ans
}

const dfs = (row, col, grid) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
    return 0
  if (grid[row][col] === 1) return 1

  grid[row][col] = 1

  const top = dfs(row - 1, col, grid)
  const bottom = dfs(row + 1, col, grid)
  const left = dfs(row, col - 1, grid)
  const right = dfs(row, col + 1, grid)

  return top + bottom + left + right === 4 ? 1 : 0
}
