//  Time: O(log(n)) | Space: O(1)
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const curr = nums[mid]

    if (curr === target) return mid

    if (curr > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
