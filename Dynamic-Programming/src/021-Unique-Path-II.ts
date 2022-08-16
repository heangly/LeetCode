// https://leetcode.com/problems/unique-paths-ii/
const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  const memo: { [key: string]: number } = {}
  const dfs = (r: number, c: number): number => {
    if (r >= obstacleGrid.length || c >= obstacleGrid[r].length) return 0
    if (obstacleGrid[r][c] === 1) return 0
    if (r === obstacleGrid.length - 1 && c === obstacleGrid[r].length - 1)
      return 1

    const key = `${r}-${c}`
    if (key in memo) return memo[key]

    memo[key] = dfs(r + 1, c) + dfs(r, c + 1)
    return memo[key]
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

export {}
