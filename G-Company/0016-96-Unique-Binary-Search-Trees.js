var numTrees = function (n, memo = {}) {
  if (n in memo) return memo[n]

  if (n <= 1) return 1
  if (n === 2) return 2

  let ans = 0

  for (let i = 1; i <= n; i++) {
    ans += numTrees(i - 1, memo) * numTrees(n - i, memo)
  }

  memo[n] = ans

  return memo[n]
}
