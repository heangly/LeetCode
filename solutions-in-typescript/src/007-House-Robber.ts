// Time: O(N) | Space: O(N)
function rob(nums: number[]): number {
  const memo: Record<string, number> = {}

  const topDown = (index: number) => {
    if (index in memo) return memo[index]

    if (index < 0) return 0
    if (index === 0) return nums[0]

    const value = Math.max(nums[index] + topDown(index - 2), topDown(index - 1))
    memo[index] = value
    return value
  }

  return topDown(nums.length - 1)
}

// Time: O(N) | Space: O(1)
// function rob(nums: number[]): number {
//   if (nums.length === 1) return nums[0]
//   const dp: [number, number] = [0, nums[0]]

//   for (let i = 1; i < nums.length; i++) {
//     const currVal = nums[i]
//     const robbingCurrHouse = currVal + dp[0]
//     const preVal = dp[1]

//     dp[0] = dp[1]
//     dp[1] = Math.max(preVal, robbingCurrHouse)
//   }

//   return dp[dp.length - 1]
// }

// Time: O(N) | Space: O(N)
// function rob(nums: number[]): number {
//   if (nums.length === 1) return nums[0]
//   const dp = new Array(nums.length + 1).fill(0)
//   dp[1] = nums[0]

//   for (let i = 2; i < dp.length; i++) {
//     const currValue = nums[i - 1]
//     const twoPreValue = dp[i - 2]
//     const preValue = dp[i - 1]
//     const robbingCurrHouse = currValue + twoPreValue
//     dp[i] = Math.max(robbingCurrHouse, preValue)
//   }

//   return dp[dp.length - 1]
// }
console.log(rob([1, 2, 3, 1]))
