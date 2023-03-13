// Time: O(n^2) | Space: O(T) where T is the length of Triplet
const threeSum = (nums: number[]): number[][] => {
  const output: number[][] = []

  if (nums.length < 3) return output

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--

        j++
        k--
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }

  return output
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
