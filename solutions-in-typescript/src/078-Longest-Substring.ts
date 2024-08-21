// Time: O(n) | Space: O(n)
function lengthOfLongestSubstring(s: string): number {
  const table: Record<string, number> = {}
  let i = 0
  let max = 0

  for (let j = 0; j < s.length; j++) {
    const char = s[j]
    if (char in table) {
      i = Math.max(i, table[char] + 1)
    }
    max = Math.max(max, j - i + 1)
    table[char] = j
  }

  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
