function maximumScore(nums: number[], multipliers: number[]): number {
  const n = nums.length
  const m = multipliers.length
  const memo: number[][] = []

  for (let i = 0; i <= m + 1; i++) {
    memo[i] = []
  }

  const dp = (left: number, i: number) => {
    if (i === m) return 0
    if (memo[left][i] !== undefined) return memo[left][i]

    const takeLeft = dp(left + 1, i + 1) + nums[left] * multipliers[i]
    const takeRight = dp(left, i + 1) + nums[n - 1 - i + left] * multipliers[i]
    memo[left][i] = Math.max(takeLeft, takeRight)
    return memo[left][i]
  }

  const res = dp(0, 0)
  return res
}

console.log(maximumScore([1, 2, 3], [3, 2, 1]))
