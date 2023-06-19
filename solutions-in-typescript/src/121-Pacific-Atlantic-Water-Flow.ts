const pacificAtlantic = (heights: number[][]): number[][] => {
  if (heights.length === 0) return []
  let numRows = heights.length
  let numCols = heights[0].length
  const atlantic: boolean[][] = []
  const pacific: boolean[][] = []

  for (let i = 0; i < numRows; i++) {
    atlantic.push(new Array(numCols).fill(false))
    pacific.push(new Array(numCols).fill(false))
  }

  for (let col = 0; col < heights[0].length; col++) {
    dfs(heights, 0, col, -Infinity, pacific)
    dfs(heights, numRows - 1, col, -Infinity, atlantic)
  }

  for (let row = 0; row < heights.length; row++) {
    dfs(heights, row, 0, -Infinity, pacific)
    dfs(heights, row, numCols - 1, -Infinity, atlantic)
  }

  const res: number[][] = []
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (atlantic[i][j] && pacific[i][j]) {
        res.push([i, j])
      }
    }
  }

  return res
}

const dfs = (matrix: number[][], i: number, j: number, prev: number, ocean: boolean[][]) => {
  if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[i].length - 1) return
  const currentValue = matrix[i][j]
  if (currentValue < prev) return
  if (ocean[i][j]) return
  ocean[i][j] = true

  dfs(matrix, i + 1, j, currentValue, ocean)
  dfs(matrix, i - 1, j, currentValue, ocean)
  dfs(matrix, i, j + 1, currentValue, ocean)
  dfs(matrix, i, j - 1, currentValue, ocean)
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ])
)
