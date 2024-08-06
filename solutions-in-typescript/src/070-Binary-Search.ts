// Time: O(Log(n)) | Space: O(1)
function search2(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const val = nums[mid]
    if (val === target) return mid
    if (val > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

const nums2 = [-1, 0, 3, 5, 9, 12]
const target2 = 9

console.log(search2(nums2, target2))
