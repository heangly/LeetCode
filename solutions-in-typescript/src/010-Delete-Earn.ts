/**
Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 */

// Time: O(N) | Space: O(N)
function deleteAndEarn(nums: number[]): number {
  const max = Math.max(...nums)
  const dp = new Array(max + 1).fill(0)

  for (const num of nums) {
    dp[num] += num
  }

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 2] + dp[i], dp[i - 1])
  }

  return dp.pop()!
}

// console.log(deleteAndEarn([3, 4, 2])) //6
// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])) //9
console.log(deleteAndEarn([2, 4, 5, 5, 5, 6])) //18
