// https://leetcode.com/problems/paint-house-iii/
const minCost = (
  houses: number[],
  cost: number[][],
  m: number,
  n: number,
  target: number
): number => {
  const cache: Record<string, number> = {}
  const backtrack = (
    prevColor: number,
    house: number,
    numNeigbhorhoods: number
  ): number => {
    if (numNeigbhorhoods > target) return Infinity
    if (house === m) {
      return numNeigbhorhoods === target ? 0 : Infinity
    }

    const key = `${prevColor}-${house}-${numNeigbhorhoods}`
    if (key in cache) return cache[key]

    if (houses[house] !== 0) {
      const additionalNeigborHoods = houses[house] !== prevColor ? 1 : 0
      return (cache[key] = backtrack(
        houses[house],
        house + 1,
        numNeigbhorhoods + additionalNeigborHoods
      ))
    }

    let min = Infinity
    for (let color = 0; color < n; color++) {
      houses[house] = color + 1
      const additionalNeigborHoods = houses[house] !== prevColor ? 1 : 0
      const res = backtrack(
        houses[house],
        house + 1,
        numNeigbhorhoods + additionalNeigborHoods
      )
      const price = cost[house][color]
      min = Math.min(min, price + res)
      houses[house] = 0
    }
    return (cache[key] = min)
  }

  const result = backtrack(-1, 0, 0)
  return result === Infinity ? -1 : result
}

export {}
