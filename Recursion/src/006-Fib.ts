// https://leetcode.com/problems/fibonacci-number/
// Time: O(N) | Space: O(N)
const fib = (n: number): number => {
  const memo: Record<string, number> = {}

  const helper = (n: number): number => {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n in memo) return memo[n]

    memo[n] = helper(n - 1) + helper(n - 2)
    return memo[n]
  }

  return helper(n)
}

console.log(fib(5))
