// Time: O(N) || Space: O(N)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const table: Record<string, number> = {} //value and index

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]

    if (Object.hasOwn(table, curr)) {
      const index = table[curr]
      if (Math.abs(i - index) <= k) return true
    }

    table[curr] = i
  }

  return false
}
