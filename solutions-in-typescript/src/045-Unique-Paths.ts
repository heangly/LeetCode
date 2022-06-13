const uniquePaths = (
  m: number,
  n: number,
  memo: { [key: string]: number } = {}
): number => {
  const key = `${m}-${n}`
  if (key in memo) return memo[key]

  if (m === 1 && n === 1) return 1
  if (m < 1 || n < 1) return 0

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)

  return memo[key]
}

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))
