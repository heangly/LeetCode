function maxProfit3(prices: number[], fee: number): number {
  let buy = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buy - fee)
    buy = Math.min(buy, prices[i] - profit)
  }

  return profit
}

console.log(maxProfit3([1, 3, 2, 8, 4, 9], 2))
