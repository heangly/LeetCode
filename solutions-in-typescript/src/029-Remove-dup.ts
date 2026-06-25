// Time: O(N)
// Space: O(1)
function removeDuplicates(nums: number[]): number {
  let k = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}
