// https://leetcode.com/problems/min-cost-climbing-stairs/

const minCostClimbingStairs = (cost: number[]): number => {
  const memo: { [key: string]: number } = {}

  const dp = (i: number): number => {
    if (i <= 1) return 0
    if (i in memo) return memo[i]

    const down1 = cost[i - 1] + dp(i - 1)
    const down2 = cost[i - 2] + dp(i - 2)

    memo[i] = Math.min(down1, down2)

    return memo[i]
  }

  return dp(cost.length)
}

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

export {}
