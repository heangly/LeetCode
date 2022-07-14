// Time: O(nlog(n)) | Space: O(1)
const minDifference = (nums: number[]): number => {
  if (nums.length <= 4) return 0
  nums.sort((a, b) => a - b)

  let lastIdx = nums.length - 1

  let option1 = nums[lastIdx - 0] - nums[3]
  let option2 = nums[lastIdx - 1] - nums[2]
  let option3 = nums[lastIdx - 2] - nums[1]
  let option4 = nums[lastIdx - 3] - nums[0]

  return Math.min(option1, option2, option3, option4)
}
