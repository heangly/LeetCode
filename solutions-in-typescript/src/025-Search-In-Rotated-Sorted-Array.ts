const search = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[left] === target) return left
    if (nums[right] === target) return right
    if (nums[mid] === target) return mid

    if (nums[mid] > target && nums[left] < target) {
      right = mid - 1
    } else if (nums[mid] < target && nums[left] > target) {
      left = mid + 1
    } else {
      left++
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
