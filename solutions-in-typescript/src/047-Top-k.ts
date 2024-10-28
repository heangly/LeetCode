// Time: O(3N) | Space: O(3N)
function topKFrequent(nums: number[], k: number): number[] {
  const arr = new Array(nums.length + 1).fill(null).map(() => [] as number[])
  const table: Record<string, number> = {}
  const output: number[] = []

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1
  }

  for (const key in table) {
    const value = table[key]
    arr[value].push(Number(key))
  }

  while (output.length < k) {
    const values = arr.pop()!
    if (values.length === 0) continue
    output.push(...values)
  }

  return output
}
