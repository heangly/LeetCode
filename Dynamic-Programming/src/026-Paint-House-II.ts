// https://leetcode.com/problems/paint-house-ii/
// Time: O(n * m * r) | Space: O(1)
const minCostII = (costs: number[][]): number => {
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[i].length; j++) {
      const prev = costs[i - 1]
      const temp = prev[j]
      prev[j] = Infinity
      costs[i][j] += Math.min(...prev)
      prev[j] = temp
    }
  }

  return Math.min(...costs[costs.length - 1])
}

console.log(
  minCostII([
    [1, 5, 3],
    [2, 9, 4]
  ])
)
export {}
