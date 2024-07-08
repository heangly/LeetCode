// Time: O(n^2) | Space: O(n)
const threeSum2 = (nums: number[]): number[][] => {
  const targetNum = 0
  const output: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === targetNum) {
        output.push([nums[i], nums[j], nums[k]])
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

  return output
}

console.log(threeSum2([-1, 0, 1, 2, -1, -4]))
