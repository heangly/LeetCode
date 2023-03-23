// Time: O(N) | Space: O(N)
const twoNumberSum = (array: number[], targetSum: number): number[] => {
  const seen = new Set<number>()
  for (const num of array) {
    const candidate = targetSum - num

    if (seen.has(candidate)) return [num, candidate]
    seen.add(num)
  }

  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
