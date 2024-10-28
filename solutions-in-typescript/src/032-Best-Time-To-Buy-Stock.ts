// Time: O(N) | Space: O(1)
function maxProfit(prices: number[]): number {
  let profit = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i]
    const sold = curr - buy
    profit = Math.max(profit, sold)
    buy = Math.min(buy, curr)
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
