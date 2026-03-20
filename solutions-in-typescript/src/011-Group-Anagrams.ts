// Time: O(N* K) Where K is the length of each element in the array
// Space: O(26) or O(1)
function groupAnagrams(strs: string[]): string[][] {
  const table: Record<string, string[]> = {}

  for (const str of strs) {
    const count = new Array(26).fill(0)

    for (const char of str) {
      const index = char.charCodeAt(0) - 97
      count[index]++
    }

    const key = count.join('#')

    if (!(key in table)) {
      table[key] = []
    }

    table[key].push(str)
  }

  return Object.values(table)
}
