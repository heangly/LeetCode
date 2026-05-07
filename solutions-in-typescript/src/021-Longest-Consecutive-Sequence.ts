function longestConsecutive(nums: number[]): number {
  const seen = new Set<number>()
  let max = 0

  for (const num of nums) {
    seen.add(num)
  }

  for (const num of seen) {
    if (!seen.has(num - 1)) {
      let count = 1

      while (seen.has(num + count)) {
        count++
      }

      max = Math.max(max, count)
    }
  }

  return max
}
