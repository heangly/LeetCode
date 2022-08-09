// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit = (prices: number[]): number => {
  if (prices.length < 2) return 0
  let max = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i])
    max = Math.max(max, prices[i] - buy)
  }

  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
export {}
