//https://leetcode.com/problems/climbing-stairs/
// Time: O(n) | space: O(n)
const climbStairs = (
  n: number,
  step: number = 0,
  memo: Record<string, number> = {}
): number => {
  if (step === n) {
    return 1
  }
  if (step > n) return 0

  if (step in memo) return memo[step]

  memo[step] = climbStairs(n, step + 1, memo) + climbStairs(n, step + 2, memo)
  return memo[step]
}

console.log(climbStairs(35))
