// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums: number[]): number => {
  if (nums.length === 0) return 0
  let max = -Infinity
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(sum, max)
    sum = sum < 0 ? 0 : sum
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
