// Time:O(N^2)
// Space: O(1)
function threeSum(nums: number[]): number[][] {
  const output: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate first letter
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]])

        // Skip duplicate left values
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        // Skip duplicate right values
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return output
}
