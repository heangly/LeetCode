// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
// Time: O(nlog(n)) | Space: O(1)
const minDifference = (nums: number[]): number => {
  nums.sort((a, b) => a - b)
  if (nums.length <= 4) return 0

  let min = Infinity
  let right = nums.length - 1
  let left = 3

  for (let i = 0; i <= 3; i++) {
    min = Math.min(min, nums[right - i] - nums[left - i])
  }

  return min
}
