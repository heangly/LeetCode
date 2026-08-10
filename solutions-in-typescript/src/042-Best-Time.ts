// Time: O(N)
// Space: O(1)
function maxProfit(prices: number[]): number {
  let profit = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const sell = prices[i] - buy
    profit = Math.max(profit, sell)
    buy = Math.min(buy, prices[i])
  }

  return profit
}
