// Time: O(n) | Space: O(1)
const canJump = (nums: number[]): boolean => {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false
    max = Math.max(nums[i] + i, max)
  }
  return true
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([3, 0, 8, 2, 0, 0, 1]))
