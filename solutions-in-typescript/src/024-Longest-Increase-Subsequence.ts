function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1)
  let min = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]
    const prev = nums[i - 1]

    if (curr > prev) {
      dp[i] += dp[i - 1]
    } else {
      console.log(min)
      if (curr >= min) {
        dp[i] = dp[i - 1]
      }
    }

    min = Math.min(min, curr)
  }

  return dp[dp.length - 1]
}

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
