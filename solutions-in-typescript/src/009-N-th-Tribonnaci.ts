// Time: O(N) | Space: O(!)
function tribonacci(n: number): number {
  const dp = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    dp[i % 3] = dp[0] + dp[1] + dp[2]
  }

  return dp[n % 3]
}

// Time: O(N) | Space: O(N)
// function tribonacci(n: number, cache: Record<string, number> = {}): number {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (n === 2) return 1

//   if (n in cache) return cache[n]

//   const value = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache)
//   cache[n] = value
//   return value
// }

console.log(tribonacci(4)) // 4
console.log(tribonacci(25)) // 1389537
