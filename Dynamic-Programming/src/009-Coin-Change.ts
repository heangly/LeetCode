// https://leetcode.com/problems/coin-change/

const coinChange = (coins: number[], amount: number): number => {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      if (i < coin) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  const ans = dp.pop()!

  return ans === Infinity ? -1 : ans
}

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
