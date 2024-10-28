// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit1 = (prices: number[]): number => {
  if (!prices.length) return 0
  let max = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const sell = prices[i]
    max = Math.max(max, sell - buy)
    buy = Math.min(buy, sell)
  }

  return max
}

// console.log(maxProfit1([7, 1, 5, 3, 6, 4]))
console.log(maxProfit1([1, 2]))
