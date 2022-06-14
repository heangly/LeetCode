const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  const dfs = (
    down: number,
    right: number,
    memo: { [key: string]: number }
  ) => {
    const key = `${down}-${right}`
    if (down < 1 || right < 1 || obstacleGrid[down - 1][right - 1] === 1)
      return 0
    if (down === 1 && right === 1) return 1

    if (memo[key]) return memo[key]

    memo[key] = dfs(down - 1, right, memo) + dfs(down, right - 1, memo)

    return memo[key]
  }

  return dfs(obstacleGrid.length, obstacleGrid[0].length, {})
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0]
  ])
)
