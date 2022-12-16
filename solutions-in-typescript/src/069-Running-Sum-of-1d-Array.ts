//Time: O(n) | Space: O(1)
const runningSum = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}

console.log('====================================')
console.log(runningSum([1, 2, 3, 4]))
console.log('====================================')
