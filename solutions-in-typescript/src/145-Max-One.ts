// Time: O(N) | Space: O(1)
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let count = 0

  for (const num of nums) {
    if (num === 1) {
      count++
      max = Math.max(max, count)
    } else {
      count = 0
    }
  }

  return max
}
