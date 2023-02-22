const findLHS = (nums: number[]): number => {
  const table: Record<number, number> = {}
  let ans = 0

  for (const num of nums) {
    table[num] = (table[num] || 0) + 1
  }

  for (const key in table) {
    const nextKey = Number(key) + 1
    if (table[nextKey]) {
      ans = Math.max(ans, table[key] + table[nextKey])
    }
  }

  return ans
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))

// [1, 2, 2, 2, 3, 3, 5, 7]
