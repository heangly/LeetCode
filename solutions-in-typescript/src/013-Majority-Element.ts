// Time: O(N)
// Space: O(N)
function majorityElement(nums: number[]): number {
  const table: Record<number, number> = {}
  const halfLen = nums.length / 2

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1
    if (table[num] > halfLen) return num
  }

  return -1
}
