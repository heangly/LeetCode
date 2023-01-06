// Time: O(log(n)) | Space: O(log(n))
const search = (nums: number[], target: number): number => {
  const helper = (left: number, right: number): number => {
    if (left > right) return -1

    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) return mid

    if (nums[mid] > target) {
      return helper(left, mid - 1)
    }

    return helper(mid + 1, right)
  }

  return helper(0, nums.length - 1)
}

console.log('====================================')
console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log('====================================')

export {}
