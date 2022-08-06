// https://leetcode.com/problems/coin-change-2/solution/
// Time: O(c * a)  | Space: O(a) where c is length of coins and a is the length of amount
const change = (amount: number, coins: number[]): number => {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (const coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      if (i < coin) continue
      dp[i] = dp[i] + dp[i - coin]
    }
  }

  return dp[dp.length - 1] === 0 ? -1 : dp[dp.length - 1]
}

console.log('====================================')
console.log(change(3, [2]))
console.log('====================================')
export {}
