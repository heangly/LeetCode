// Time: O(N) | Space: O(1)
const rob = (nums: number[]): number => {
  let max = nums[0]
  let prev1 = nums[0]
  let prev2 = 0

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i] + prev2, prev1)
    prev2 = prev1
    prev1 = max
  }

  return max
}