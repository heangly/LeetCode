// Time: O(N ^ 2) | Space: O(1)
function minCostII(costs: number[][]): number {
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[i].length; j++) {
      // store the direct top value above the current value
      const directTopValue = costs[i - 1][j]
      // temporarily update its value to the biggest number so that Math.min will cancel it
      costs[i - 1][j] = Infinity
      // min of values from above row without the direct top
      const min = Math.min(...costs[i - 1])
      // put the correct value back
      costs[i - 1][j] = directTopValue
      // add the current value with the smallest value from above row
      costs[i][j] += min
    }
  }
  return Math.min(...costs[costs.length - 1])
}
