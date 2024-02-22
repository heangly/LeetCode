// Time: O(n * m) | space: O(n)
function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false)
  dp[dp.length - 1] = true

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const slicedWord = s.slice(i, i + word.length)
      if (slicedWord === word && dp[i + word.length]) {
        dp[i] = true
        break
      }
    }
  }

  return dp[0]
}
