// Time: O(nlogn) | space: O(r) where r is the length of original element
const findOriginalArray = (changed: number[]): number[] => {
  if (changed.length % 2 !== 0) return []

  changed.sort((a, b) => a - b)
  const table: { [key: number]: number } = {}
  const ans: number[] = []

  for (const value of changed) {
    table[value] = (table[value] || 0) + 1
  }

  for (const value of changed) {
    const dividedValue = value / 2

    if (value === 0) continue

    if (dividedValue in table && table[dividedValue] > 0 && table[value] > 0) {
      ans.push(dividedValue)
      table[dividedValue]--
      table[value]--
    }
  }

  if (table[0] % 2 === 0 && table[0] / 2 > 0) {
    const zeros = table[0] / 2
    for (let i = 0; i < zeros; i++) {
      ans.push(0)
    }
  }

  return ans.length === changed.length / 2 ? ans : []
}

// console.log(findOriginalArray([1, 3, 4, 2, 6, 8]))
// console.log(findOriginalArray([6, 3, 0, 1]))
// console.log(findOriginalArray([1]))
// console.log(findOriginalArray([0, 3, 2, 4, 6, 0]))
console.log(findOriginalArray([0, 0, 0, 0]))
