function maxProfit(k: number, prices: number[]): number {
  const memo: Record<string, number> = {}

  const helper = (i: number, transactionRemaining: number, isHolding: boolean) => {
    if (transactionRemaining === 0 || i === prices.length) return 0

    const key = `${i}:${transactionRemaining}:${isHolding}`

    if (key in memo) return memo[key]

    const doNothing = () => helper(i + 1, transactionRemaining, isHolding)
    const sell = () => prices[i] + helper(i + 1, transactionRemaining - 1, false)
    const buy = () => -prices[i] + helper(i + 1, transactionRemaining, true)

    let res: number
    if (isHolding) {
      // sell or do nothing
      res = Math.max(sell(), doNothing())
    } else {
      // buy or do nothing
      res = Math.max(buy(), doNothing())
    }

    memo[key] = res
    return memo[key]
  }

  return helper(0, k, false)
}
