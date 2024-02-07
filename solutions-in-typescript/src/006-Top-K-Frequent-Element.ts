//Time: O(N) | space: O(N)
function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<string, number> = {}
  const buckets = new Array(nums.length + 1).fill(null)
  const output: number[] = []

  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1
  }

  for (const [key, value] of Object.entries(map)) {
    const previousValue = buckets[value]
    if (!previousValue) {
      buckets[value] = [key]
    } else {
      buckets[value].push(key)
    }
  }

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (output.length >= k) break
    if (!buckets[i]) continue
    output.push(...buckets[i])
  }

  return output
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
