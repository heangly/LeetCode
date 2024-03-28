// Time: O(N) | Space: O(1)
function maxSubArray(nums: number[]): number {
  let max = -Infinity
  let previousSum = 0

  for (const currNum of nums) {
    previousSum = Math.max(previousSum + currNum, currNum)
    max = Math.max(max, previousSum)
  }

  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
