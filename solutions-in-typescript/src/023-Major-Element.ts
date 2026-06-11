// Time: O(N) | Space: O(N)
function majorityElement(nums: number[]): number[] {
  const cap = Math.floor(nums.length / 3)
  const output: number[] = []
  const table: Record<string, number> = {}
  const seen = new Set<number>()

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1

    if (table[num] > cap && !seen.has(num)) {
      output.push(num)
      seen.add(num)
    }
  }

  return output
}
