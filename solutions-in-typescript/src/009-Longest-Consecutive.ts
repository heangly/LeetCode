// Time: O(N) | Space: O(N)
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums)
  let max = 0

  for (const num of numSet) {
    let nextNum = num + 1
    let count = 1

    if (!numSet.has(num - 1)) {
      while (numSet.has(nextNum)) {
        count++
        nextNum++
      }
    }

    max = Math.max(max, count)
  }

  return max
}
