// https://leetcode.com/problems/maximum-sum-circular-subarray/
// Time: O(n) | Space: O(1)
const maxSubarraySumCircular = (nums: number[]): number => {
  let max = nums[0]
  let runningMax = nums[0]
  let min = nums[0]
  let runningMin = nums[0]
  let total = nums[0]

  for (let i = 1; i < nums.length; i++) {
    runningMax = Math.max(nums[i], nums[i] + runningMax)
    max = Math.max(max, runningMax)

    runningMin = Math.min(nums[i], nums[i] + runningMin)
    min = Math.min(min, runningMin)

    total += nums[i]
  }

  return max > 0 ? Math.max(max, total - min) : max
}

console.log(maxSubarraySumCircular([5, -3, 5]))

export {}
