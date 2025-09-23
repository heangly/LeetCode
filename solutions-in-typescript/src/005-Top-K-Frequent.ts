// Time: O(N) | Space: O(N)
function topKFrequent(nums: number[], k: number): number[] {
  const table: Record<number, number> = {}
  let max = 0
  const output: number[] = []

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1
    max = Math.max(max, table[num])
  }

  const arr: number[][] = Array.from({ length: max + 1 }, () => [])

  for (const [key, freq] of Object.entries(table)) {
    arr[freq].push(+key)
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (const num of arr[i]) {
      output.push(num)
      if (output.length === k) return output
    }
  }

  return output
}

const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2]
const k = 2
console.log(topKFrequent(nums, k))
