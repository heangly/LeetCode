// Time: O(N)
// Space: O(1)
function removeElement(nums: number[], val: number): number {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    while (i <= j && nums[j] === val) {
      j--
    }

    if (i <= j && nums[i] == val) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j--
    }

    i++
  }

  return j + 1
}
