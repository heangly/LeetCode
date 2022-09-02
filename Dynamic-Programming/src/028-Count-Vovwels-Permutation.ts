// https://leetcode.com/problems/count-vowels-permutation/
// Time: O(n) | Space: O(n)
const countVowelPermutation = (n: number): number => {
  if (n === 1) return 5

  const dp = new Array(5).fill(1).map(() => new Array(n).fill(1))
  const a = 0
  const e = 1
  const i = 2
  const o = 3
  const u = 4
  const mod = 10 ** 9 + 7

  for (let c = 1; c < dp[0].length; c++) {
    dp[a][c] = (dp[e][c - 1] + dp[i][c - 1] + dp[u][c - 1]) % mod
    dp[e][c] = (dp[a][c - 1] + dp[i][c - 1]) % mod
    dp[i][c] = (dp[e][c - 1] + dp[o][c - 1]) % mod
    dp[o][c] = dp[i][c - 1] % mod
    dp[u][c] = (dp[i][c - 1] + dp[o][c - 1]) % mod
  }

  return (
    (dp[a][n - 1] + dp[e][n - 1] + dp[i][n - 1] + dp[o][n - 1] + dp[u][n - 1]) %
    mod
  )
}

console.log(countVowelPermutation(2))
