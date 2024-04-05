// Time: O(N) | Space:O(N)
function maxSubarraySumCircular(nums: number[]): number {
  let max = nums[0]
  let runningMax = nums[0]
  let min = nums[0]
  let runningMin = nums[0]
  let total = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    runningMax = Math.max(runningMax + num, num)
    max = Math.max(max, runningMax)

    runningMin = Math.min(runningMin + num, num)
    min = Math.min(min, runningMin)

    total += num
  }

  return max < 0 ? max : Math.max(max, total - min)
}

console.log(maxSubarraySumCircular([1, -2, 3, -2])) // output: 3
