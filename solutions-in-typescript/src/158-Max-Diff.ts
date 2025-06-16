// Time: O(N) | Space: O(1)
function maximumDifference(nums: number[]): number {
  let ans = -1
  let min = nums[0]

  for (let j = 1; j < nums.length; j++) {
    const curr = nums[j]

    if (curr > min) {
      ans = Math.max(ans, curr - min)
    }

    min = Math.min(min, curr)
  }

  return ans
}
