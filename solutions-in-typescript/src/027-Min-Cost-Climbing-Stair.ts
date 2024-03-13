function minCostClimbingStairs2(cost: number[]): number {
  if (cost.length === 2) return Math.min(...cost)

  const dp = new Array(cost.length + 1).fill(0)

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[dp.length - 1]
}

console.log(minCostClimbingStairs2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
