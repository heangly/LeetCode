// Time: O(n) | Space: O(n)
const uniqueOccurrences = (arr: number[]): boolean => {
  const table: Record<number, number> = {}

  for (const num of arr) {
    table[num] = (table[num] || 0) + 1
  }

  const values = Object.values(table)
  return new Set(values).size === values.length
}

console.log('====================================')
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log('====================================')
