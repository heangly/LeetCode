const combinationSum4 = (nums: number[], target: number): number => {
  const memo: Record<number, number> = {}

  const dp = (sum: number) => {
    if (sum === target) return 1
    if (sum > target) return 0
    if (memo[sum]) return memo[sum]
    let count = 0

    for (let i = 0; i < nums.length; i++) {
      count += dp(sum + nums[i])
    }
    memo[sum] = count
    return count
  }

  const res = dp(0)
  return res
}

console.log(combinationSum4([1, 2, 3], 4))
