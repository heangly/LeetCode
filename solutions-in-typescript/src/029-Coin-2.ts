// Time: O(N) | Space: O(N) where N is the amount
function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      const amount = i
      if (coin > amount) continue
      dp[i] += dp[amount - coin]
    }
  }

  return dp[dp.length - 1]
}

console.log(change(5, [1, 2, 5]))
