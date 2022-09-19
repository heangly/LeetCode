// https://leetcode.com/problems/number-of-islands/

// Time: O(n * m) | Space: O(n * m)
const numIsLand = (grid) => {
  let island = 0

  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) return
    if (grid[i][j] === '0') return

    grid[i][j] = '0'

    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') continue

      dfs(i, j)
      island++
    }
  }

  return island
}

console.log(
  numIsLand([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
)
console.log(
  numIsLand([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
)
