// Time: O(N)
// Space: O(N)
function topKFrequent(nums: number[], k: number): number[] {
  const arr: number[][] = Array.from({ length: nums.length + 1 }, () => [])
  const table: Record<string, number> = {}
  const output: number[] = []

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1
  }

  for (const key in table) {
    const freq = table[key]
    arr[freq].push(+key)
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i]
    if (!element.length) continue

    while (element.length && output.length < k) {
      output.push(element.pop()!)
    }

    if (output.length >= k) break
  }

  return output
}
