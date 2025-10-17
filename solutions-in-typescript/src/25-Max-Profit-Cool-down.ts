//Time	O(n)	Each (i, canBuy, canSell) visited once
// Space	O(n)	Memo table + recursion call stack
function maxProfit(prices: number[]): number {
  const memo: Record<string, number> = {}

  const helper = (i: number, canBuy: boolean, canSell: boolean): number => {
    if (i >= prices.length) return 0

    const key = `${i}-${canBuy}-${canSell}`
    if (key in memo) return memo[key]

    if (canBuy) {
      // Option 1: buy
      const buy = -prices[i] + helper(i + 1, false, true)
      // Option 2: skip
      const skip = helper(i + 1, true, false)
      memo[key] = Math.max(buy, skip)
    } else if (canSell) {
      // Option 1: sell
      const sell = +prices[i] + helper(i + 1, false, false)
      // Option 2: hold
      const hold = helper(i + 1, false, true)
      memo[key] = Math.max(sell, hold)
    } else {
      memo[key] = helper(i + 1, true, false)
    }

    return memo[key]
  }

  return helper(0, true, false)
}

console.log(maxProfit([1, 2, 3, 0, 2]))
