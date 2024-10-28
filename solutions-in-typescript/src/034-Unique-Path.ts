// Time: O(n * m) | Space: O(n * m)
function uniquePaths(m: number, n: number): number {
  const isOutOfBound = (i: number, j: number) => {
    if (i >= m || j >= n) return true
    return false
  }

  const isAtFinishLine = (i: number, j: number) => {
    if (i === m - 1 && j === n - 1) return true
    return false
  }

  const cache: Record<string, number> = {}

  const dfs = (i: number, j: number): number => {
    if (isOutOfBound(i, j)) return 0
    if (isAtFinishLine(i, j)) return 1

    const key = `row:${i}-col:${j}`
    if (key in cache) return cache[key]

    const value = dfs(i + 1, j) + dfs(i, j + 1)
    cache[key] = value
    return cache[key]
  }

  return dfs(0, 0)
}
