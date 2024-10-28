// https://leetcode.com/problems/two-city-scheduling/
const twoCitySchedCost = (costs) => {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
  const mid = Math.floor(costs.length / 2)
  let sum = 0

  for (let i = 0; i < mid; i++) {
    sum += costs[i][0] + costs[i + mid][1]
  }

  return sum
}

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
  ])
)
