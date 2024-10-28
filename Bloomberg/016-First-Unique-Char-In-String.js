// https://leetcode.com/problems/first-unique-character-in-a-string/

// Time: O(n) | space: O(1) because there are only 26 character -> O(1)
const firstUniqueChar = (s) => {
  const map = {}

  for (const char of s) {
    map[char] = (map[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map[char] === 1) return i
  }

  return -1
}

console.log(firstUniqueChar('aadadaad'))
