// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
const maxProfit = (k: number, prices: number[]): number => {
  if (!prices.length) return 0

  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(prices.length).fill(0))

  for (let t = 1; t < dp.length; t++) {
    let max = -Infinity

    for (let d = 1; d < prices.length; d++) {
      max = Math.max(max, dp[t - 1][d - 1] - prices[d - 1])
      dp[t][d] = Math.max(dp[t][d - 1], max + prices[d])
    }
  }

  return dp[k][prices.length - 1]
}

console.log(maxProfit(2, [5, 11, 3, 50, 60, 90]))
