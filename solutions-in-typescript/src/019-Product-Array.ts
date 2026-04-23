// Time: O(N)
// Space: O(1)
function productExceptSelf(nums: number[]): number[] {
  const len = nums.length
  const output = Array.from({ length: len }, () => 1)

  let prefix = 1
  for (let i = 0; i < len; i++) {
    output[i] = prefix
    prefix = prefix * nums[i]
  }

  let suffix = 1
  for (let i = len - 1; i >= 0; i--) {
    output[i] = output[i] * suffix
    suffix = suffix * nums[i]
  }

  return output
}
