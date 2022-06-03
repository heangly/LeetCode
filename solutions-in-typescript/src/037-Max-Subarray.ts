// Time: O(n), Space: O(1)
const maxSubArray = (nums: number[]): number => {
  let sumSoFar = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    sumSoFar = Math.max(nums[i], sumSoFar + nums[i])
    max = Math.max(max, sumSoFar)
  }

  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
