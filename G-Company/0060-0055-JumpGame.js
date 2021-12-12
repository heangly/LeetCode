function canJump(nums) {
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false // max steps cannot reach position i
    max = Math.max(nums[i] + i, max)
  }

  return true
}
