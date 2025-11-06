// Time: O(N) | Space: O(N)
function twoSum2(nums: number[], target: number): number[] {
  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const searchingNum = target - nums[i]

    if (searchingNum in table) {
      return [table[searchingNum], i]
    }

    table[nums[i]] = i
  }

  return [-1, -1]
}
