// Time: O(m * n) | Space: O(m * n)
// const uniquePaths2 = (m: number, n: number): number => {
//   const cache: Record<string, number> = {}

//   const dfs = (row: number, col: number): number => {
//     const key = `${row}-${col}`
//     if (key in cache) return cache[key]

//     // reach the last col
//     if (row === m - 1 && col === n - 1) return 1
//     // when go out of bound
//     if (row >= m || row < 0) return 0
//     if (col >= n || col < 0) return 0

//     const goDown = dfs(row + 1, col)
//     const goRight = dfs(row, col + 1)

//     cache[key] = goDown + goRight
//     return cache[key]
//   }

//   return dfs(0, 0)
// }

const uniquePaths2 = (m: number, n: number): number => {
  const dp = new Array(m).fill(1).map(() => new Array(n).fill(1))

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[row].length; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
    }
  }

  return dp.pop()!.pop()!
}

console.log(uniquePaths2(3, 7))
