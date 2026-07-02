function searchInsert(nums: number[], target: number): number {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const curr = nums[mid]

    if (curr === target) return mid

    if (curr >= target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }

  return i
}
