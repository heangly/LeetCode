function maxProfit5(prices: number[]): number {
  let buy = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    const sell = currentPrice - buy
    profit = Math.max(profit, sell)
    buy = Math.min(buy, prices[i])
  }

  return profit
}

console.log(maxProfit5([7, 1, 5, 3, 6, 4]))
