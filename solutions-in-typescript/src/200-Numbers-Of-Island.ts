// Time: O(M * N) | Space: O(M * N)
const numIslands = (grid: string[][]): number => {
  let islands = 0

  const traverse = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return
    if (grid[i][j] === '0') return
    grid[i][j] = '0'

    traverse(i, j + 1)
    traverse(i, j - 1)
    traverse(i + 1, j)
    traverse(i - 1, j)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') continue
      traverse(i, j)
      islands++
    }
  }

  return islands
}

const grid3 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]

const grid4 = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']
]

console.log(numIslands(grid))
