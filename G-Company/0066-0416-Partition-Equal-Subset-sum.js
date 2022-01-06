const canPartition = (nums) => {
  let n = nums.length
  const total = nums.reduce((a, b) => a + b, 0)

  if (total % 2 !== 0) return false
  let half = total / 2
  const table = {}

  const traverse = (i, sum) => {
    const key = `${i}-${sum}`
    if (key in table) return table[key]

    if (i >= n - 1) {
      table[key] = sum === half
    } else if (sum > half) {
      table[key] = false
    } else {
      table[key] = traverse(i + 1, sum + nums[i]) || traverse(i + 1, sum)
    }
    return table[key]
  }
  return traverse(0, 0)
}

console.log(canPartition([1, 2, 3, 4]))
