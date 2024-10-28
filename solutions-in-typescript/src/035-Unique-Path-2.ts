function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const totalRow = obstacleGrid.length
  const totalCol = obstacleGrid[0].length
  const cache: Record<string, number> = {}

  const isOutOfBoundary = (i: number, j: number) => {
    if (i >= totalRow || j >= totalCol) return true
    return false
  }

  const isAtFinishLine = (i: number, j: number) => {
    if (i === totalRow - 1 && j === totalCol - 1) return true
    return false
  }

  const isObstacle = (i: number, j: number) => {
    return obstacleGrid[i][j] === 1
  }

  const dfs = (i: number, j: number): number => {
    if (isOutOfBoundary(i, j)) return 0
    if (isObstacle(i, j)) return 0
    if (isAtFinishLine(i, j)) return 1

    const key = `${i}-${j}`
    if (key in cache) return cache[key]

    const goDown = dfs(i + 1, j)
    const goRight = dfs(i, j + 1)

    cache[key] = goDown + goRight

    return cache[key]
  }

  return dfs(0, 0)
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)
