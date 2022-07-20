// https://leetcode.com/problems/longest-increasing-subsequence/
// Time: O(n^2) | space: O(n)
const lengthOfLIS = (nums: number[]): number => {
  const dp = new Array(nums.length).fill(1)
  let max = 1

  for (let i = 1; i < nums.length; i++) {
    let j = i - 1

    while (j >= 0) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
        max = Math.max(dp[i], max)
      }
      j--
    }
  }

  return max
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
