// Time: O(n) | Space: O(n)
const canConstruct = (ransomNote: string, magazine: string): boolean => {
  if (magazine.length < ransomNote.length) return false

  const table: Record<string, number> = {}

  for (const char of magazine) {
    table[char] = (table[char] || 0) + 1
  }

  for (const char of ransomNote) {
    if (!table[char] || table[char] <= 0) return false
    table[char]--
  }

  return true
}
