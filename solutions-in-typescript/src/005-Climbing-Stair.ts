// Time: O(N) | Space: O(1)
function climbStairs(n: number): number {
  const output: [number, number] = [1, 2]

  if (n === 1) return output[0]
  if (n === 2) return output[1]

  for (let i = 2; i < n; i++) {
    const sum = output[0] + output[1]
    output[0] = output[1]
    output[1] = sum
  }

  return output[1]
}

// Time: O(N) | Space: O(N)
// function climbStairs(n: number, caches: Record<string, number> = {}): number {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   if (n in caches) return caches[n]

//   const value = climbStairs(n - 1, caches) + climbStairs(n - 2, caches)
//   caches[n] = value
//   return caches[n]
// }

console.log(climbStairs(6))
