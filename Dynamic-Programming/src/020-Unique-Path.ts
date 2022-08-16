// https://leetcode.com/problems/unique-paths/
// Time: O(m * n) | Space: O(m + n)
const uniquePaths = (m: number, n: number): number => {
  const memo: { [key: string]: number } = {}

  const dp = (r: number, c: number): number => {
    const key = `r:${r}-c:${c}`
    if (key in memo) return memo[key]

    if (r >= m || c >= n) return 0
    if (r === m - 1 && c === n - 1) return 1

    memo[key] = dp(r + 1, c) + dp(r, c + 1)
    return memo[key]
  }

  return dp(0, 0)
}

console.log(uniquePaths(3, 7))
