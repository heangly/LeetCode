// Time: O(w) | O(w1 + w2) | where w is the length of unique char
const checkAlmostEquivalent = (word1: string, word2: string): boolean => {
  const table1: Record<string, number> = {}
  const table2: Record<string, number> = {}
  const atMostValue = 4

  for (const char of word1) {
    table1[char] = (table1[char] || 0) + 1
  }

  for (const char of word2) {
    table2[char] = (table2[char] || 0) + 1
    table1[char] = table1[char] || 0
  }

  for (const key in table1) {
    const valueFromTable1 = table1[key]
    const valueFromTable2 = table2[key] || 0
    if (Math.abs(valueFromTable1 - valueFromTable2) >= atMostValue) return false
  }

  return true
}

console.log(checkAlmostEquivalent('aaaa', 'bccb'))
