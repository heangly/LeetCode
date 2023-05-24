// Time: O(n * m  * n)
const wordBreak = (s: string, wordDict: string[]): boolean => {
  const dp = new Array(s.length + 1).fill(false)
  dp[dp.length - 1] = true

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const wordToCheck = s.slice(i, i + word.length)
      if (wordToCheck === word) {
        dp[i] = dp[i + word.length]
      }

      if (dp[i]) break
    }
  }

  return dp[0]
}

console.log(wordBreak('cars', ['car', 'ca', 'rs']))
