// Time: O(N) | Space: O(N)
function maxProfit2(prices: number[]): number {
  const memo: Record<string, number> = {}

  const helper = (i: number, isHolding: boolean): number => {
    if (i >= prices.length) return 0

    const buy = () => -prices[i] + helper(i + 1, true)
    const sell = () => prices[i] + helper(i + 2, false)
    const doNothing = () => helper(i + 1, isHolding)

    const key = `index=${i}&isHoliding=${isHolding}`

    if (key in memo) return memo[key]

    if (isHolding) {
      memo[key] = Math.max(sell(), doNothing())
    } else {
      memo[key] = Math.max(buy(), doNothing())
    }

    return memo[key]
  }

  return helper(0, false)
}

console.log(maxProfit2([1, 2, 3, 0, 2]))
