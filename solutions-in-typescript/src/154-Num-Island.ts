// Time: O(n * m)
// Space: O(n * m)
function numIslands(grid: string[][]): number {
  const paths = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  let numIslands = 0

  const helper = (i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return
    if (grid[i][j] === '0') return

    grid[i][j] = '0'

    for (const [dx, dy] of paths) {
      helper(i + dx, j + dy)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        helper(i, j)
        numIslands++
      }
    }
  }

  return numIslands
}
