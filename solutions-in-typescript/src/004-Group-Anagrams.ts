// Time: O(n * m)
// Space: O(1)
function groupAnagrams(strs: string[]): string[][] {
  const table: Record<string, string[]> = {}

  for (const str of strs) {
    const arr = new Array(26).fill(0)

    for (const char of str) {
      const val = char.charCodeAt(0) - 97
      arr[val]++
    }

    const key = arr.join('#')

    if (key in table) {
      table[key].push(str)
    } else {
      table[key] = [str]
    }
  }

  return Object.values(table)
}
