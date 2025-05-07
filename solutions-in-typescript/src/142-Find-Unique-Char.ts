//  Time: O(N) | Space: O(N)
function firstUniqChar(s: string): number {
  const table: Record<string, number> = {}

  for (const char of s) {
    table[char] = (table[char] ?? 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] === 1) return i
  }

  return -1
}
