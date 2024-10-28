// Time: O(N) | Space: O(1)
function minCost(costs: number[][]): number {
  for (let i = 1; i < costs.length; i++) {
    const previous = costs[i - 1]
    const current = costs[i]
    costs[i][0] = current[0] + Math.min(previous[1], previous[2])
    costs[i][1] = current[1] + Math.min(previous[0], previous[2])
    costs[i][2] = current[2] + Math.min(previous[0], previous[1])
  }

  return Math.min(...costs[costs.length - 1])
}

console.log(
  minCost([
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19]
  ])
)
