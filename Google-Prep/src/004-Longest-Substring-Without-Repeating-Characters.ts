// Time: O(n) | Space:O(n)
const lengthOfLongestSubstring = (s: string): number => {
  let max = 0
  let start = 0
  const table: Record<string, number> = {}

  for (let end = 0; end < s.length; end++) {
    const char = s[end]
    if (char in table) {
      start = Math.max(start, table[char] + 1)
    }

    table[char] = end
    max = Math.max(max, end - start + 1)
  }

  return max
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abba'))
