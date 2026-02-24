// Time: O(N)
// Space: O(A) where N is the total length of the output array ( N * 2)
function getConcatenation(nums: number[]): number[] {
  const len = nums.length
  const arr = new Array(len * 2)

  for (let i = 0; i < len; i++) {
    arr[i] = nums[i]
    arr[i + len] = nums[i]
  }

  return arr
}
