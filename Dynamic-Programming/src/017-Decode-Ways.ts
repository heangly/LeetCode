// https://leetcode.com/problems/decode-ways/
// Time: O(n) | Space: O(n)
const numDecodings = (s: string): number => {
  const dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1

  for (let i = 2; i < dp.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }

    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[dp.length - 1]
}

console.log(numDecodings('11106'))
console.log(numDecodings('12'))
console.log(numDecodings('226'))
console.log(numDecodings('06'))
