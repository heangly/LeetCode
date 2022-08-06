// https://leetcode.com/problems/paint-fence/
// Time: O(n) | Space: O(n)
const numWays = (n: number, k: number): number => {
  const memo: { [key: string]: number } = {}
  const dp = (n: number): number => {
    if (n === 1) return k
    if (n === 2) return k * k
    if (n in memo) return memo[n]

    memo[n] = (k - 1) * (dp(n - 1) + dp(n - 2))
    return memo[n]
  }

  return dp(n)
}

console.log(numWays(3, 2))

export {}
