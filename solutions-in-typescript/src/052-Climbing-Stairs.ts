const climbStairs = (n: number): number => {
  return dfs(n, 0)
}

// Time: O(n) | Space: O(n)
const dfs = (
  n: number,
  step: number,
  cache: { [key: string]: number } = {}
): number => {
  if (step > n) return 0
  if (step === n) return 1

  if (step in cache) return cache[step]

  cache[step] = dfs(n, step + 1, cache) + dfs(n, step + 2, cache)

  return cache[step]
}

console.log(climbStairs(2))
console.log(climbStairs(3))
export {}
