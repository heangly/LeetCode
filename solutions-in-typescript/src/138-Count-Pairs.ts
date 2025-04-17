// Time: O(N) best case, O(N^2) worst case
// Space: O(N)
function countPairs(nums: number[], k: number): number {
  let output = 0
  // object which key is nums value, and value is array of nums indexes
  const table: Record<string, number[]> = {}

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    table[val] = table[val] || []

    for (const index of table[val]) {
      if ((i * index) % k === 0) {
        output++
      }
    }

    table[val].push(i)
  }

  return output
}
