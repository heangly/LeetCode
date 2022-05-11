const searchRange = (nums: number[], target: number): number[] => {
  const ans = [-1, -1]

  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      let firstPos = mid
      let secondPos = mid

      while (firstPos >= 0 && nums[firstPos] === target) {
        ans[0] = firstPos
        firstPos--
      }

      while (secondPos < nums.length && nums[secondPos] === target) {
        ans[1] = secondPos
        secondPos++
      }

      return ans
    }

    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return ans
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]
console.log(searchRange([], 0)) // [-1, -1]
