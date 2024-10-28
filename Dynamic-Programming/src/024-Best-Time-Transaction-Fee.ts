// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// Time: O(n) | Space: O(1)
const maxProfit = (prices: number[], fee: number): number => {
  let profit = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buy - fee)
    buy = Math.min(buy, prices[i] - profit)
  }
  return profit
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
export {}
