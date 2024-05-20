// Time: O(n * m) | Space: (n * m)

function findLength(nums1: number[], nums2: number[]): number {
  const dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0))
  let max = 0

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const n1 = nums1[i - 1]
      const n2 = nums2[j - 1]
      const diag = dp[i - 1][j - 1]
      if (n1 === n2) {
        dp[i][j] = diag + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max
}
