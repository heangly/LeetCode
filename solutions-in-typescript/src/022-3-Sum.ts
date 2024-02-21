// Time: O(nlogn + n^2) | space: O(1)
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const ans: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        j++
        k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }

  return ans
}
