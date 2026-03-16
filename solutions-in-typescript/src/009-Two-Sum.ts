// Time: O(N) | Space: O(N)
function twoSum(nums: number[], target: number): number[] {
  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const candidiate = target - nums[i]

    if (candidiate in table) {
      return [i, table[candidiate]]
    }

    table[nums[i]] = i
  }
  return [-1, -1]
}
