function minPathSum(grid: number[][]): number {
  const cache: Record<string, number> = {}

  const dfs = (i: number, j: number): number => {
    if (i >= grid.length || j >= grid[i].length) return Infinity
    const currentValue = grid[i][j]
    if (i === grid.length - 1 && j === grid[i].length - 1) return currentValue

    const key = `${i}-${j}`
    if (key in cache) return cache[key]

    const goDown = currentValue + dfs(i + 1, j)
    const goRight = currentValue + dfs(i, j + 1)

    const minValue = Math.min(goDown, goRight)
    cache[key] = minValue
    return cache[key]
  }

  return dfs(0, 0)
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
