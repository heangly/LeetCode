// Time: O(c * a) | Space: O(1) where 'c' is the length of coins and 'a' is the length of amount
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      if (i < coin) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  const res = dp[dp.length - 1]

  return res === Infinity ? -1 : res
}
