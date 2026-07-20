// Time: O(N)
// Space: O(N)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const diff = i - table[curr]
    if (curr in table && diff <= k) return true
    table[curr] = i
  }

  return false
}
