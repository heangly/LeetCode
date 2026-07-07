// Time: O(N)
// Space: O(1)
function rotate(nums: number[], k: number): void {
  const modK = k % nums.length

  const reverse = (i: number, j: number) => {
    while (i < j) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, modK - 1)
  reverse(modK, nums.length - 1)
}
