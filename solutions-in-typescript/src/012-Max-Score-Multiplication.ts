function maximumScore(nums: number[], multipliers: number[]): number {
  const memo = new Array(multipliers.length).fill(null).map(() => new Array(multipliers.length).fill([]))

  const helper = (left: number, op: number) => {
    if (op === multipliers.length) return 0
    const rightIndex = nums.length - 1 - (op - left)

    if (memo[left][op]) {
      return memo[left][op]
    }

    const takeRight = multipliers[op] * nums[rightIndex] + helper(left, op + 1)
    const takeLeft = multipliers[op] * nums[left] + helper(left + 1, op + 1)
    memo[left][op] = Math.max(takeLeft, takeRight)
    return memo[left][op]
  }

  return helper(0, 0)
}

console.log(maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]))
