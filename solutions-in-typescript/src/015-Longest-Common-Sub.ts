// Time: O(N*M) | Space: O(N*M) where N is the length of text1 and M is the length of text2
function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = new Array(text1.length + 1).fill(null).map(() => new Array(text2.length + 1).fill(0))
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const char1 = text1[i - 1]
      const char2 = text2[j - 1]
      const left = dp[i][j - 1]
      const top = dp[i - 1][j]
      const diag = dp[i - 1][j - 1]

      if (char1 === char2) {
        dp[i][j] = diag + 1
      } else {
        dp[i][j] = Math.max(left, top, diag)
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1]
}
