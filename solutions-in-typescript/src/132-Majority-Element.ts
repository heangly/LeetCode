// Time: O(N)
// Space: O(N)
function majorityElement(nums: number[]): number {
  const half = Math.floor(nums.length / 2)

  const table: Record<string, number> = {}
  const max = {
    value: 0,
    freq: 0
  }

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1

    if (table[num] > max.freq) {
      max.value = num
      max.freq = table[num]
    }

    if (max.freq > half) {
      return max.value
    }
  }

  return max.value
}
