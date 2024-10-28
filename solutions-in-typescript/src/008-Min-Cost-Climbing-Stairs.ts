function minCostClimbingStairs(cost: number[]): number {
  if (cost.length === 1) return cost[0]
  if (cost.length === 2) return Math.min(cost[0], cost[1])

  const dp = new Array(cost.length + 1).fill(0)

  for (let i = 2; i < dp.length; i++) {
    const takeOneStep = cost[i - 1] + dp[i - 1]
    const takeTwoSteps = cost[i - 2] + dp[i - 2]
    dp[i] = Math.min(takeOneStep, takeTwoSteps)
  }

  return dp[dp.length - 1]
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
