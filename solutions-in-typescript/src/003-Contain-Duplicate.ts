// Time: O(N)
// Space: O(N)
function containsDuplicate(nums: number[]): boolean {
  const table: Record<string, boolean> = {}

  for (const num of nums) {
    if (table[num]) return true
    table[num] = true
  }
  return false
}
