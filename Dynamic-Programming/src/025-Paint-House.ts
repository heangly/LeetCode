// https://leetcode.com/problems/paint-house/
// Time: O(n) | Space: O(1)
const minCost = (costs: number[][]): number => {
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2])
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2])
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1])
  }

  return Math.min(...costs[costs.length - 1])
}

console.log(
  minCost([
    [20, 18, 4],
    [9, 9, 10]
  ])
)

console.log(minCost([[7, 6, 2]]))
export {}
