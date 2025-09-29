// Time: O(n^2) | Space: O(N)
function threeSum(nums: number[]): number[][] {
  const output = []
  nums.sort((a, b) => a - b)
  let i = 0

  while (i < nums.length) {
    while (i > 0 && nums[i] === nums[i - 1]) {
      i++
      continue
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]])
        j++
        k--

        while (j < nums.length && nums[j] === nums[j - 1]) j++
        while (k >= 0 && nums[k] === nums[k + 1]) k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }

    i++
  }

  return output
}
