// Time: O(n + m) | Space: O(c) where c is the longest characters without repeating
const lengthOfLongestSubstring = (s: string): number => {
  let ans = 0
  const words = new Map<string, boolean>()

  for (const char of s) {
    if (words.has(char)) {
      for (const key of words.keys()) {
        words.delete(key)
        if (key === char) break
      }
    }
    words.set(char, true)

    ans = Math.max(words.size, ans)
  }

  return ans
}

// // Time: O(n^2) | Space: O(c) where c is the longest characters without repeating
// const lengthOfLongestSubstring = (s: string): number => {
//   let ans = 0
//   let words = ''

//   for (const char of s) {
//     const charIdx = words.indexOf(char)
//     if (charIdx !== -1) {
//       words = words.slice(charIdx + 1)
//     }
//     words += char
//     ans = Math.max(ans, words.length)
//   }
//   return ans
// }

console.log('abcabcbb: ', lengthOfLongestSubstring('abcabcbb'))
console.log('bbbbb: ', lengthOfLongestSubstring('bbbbb'))
console.log('pwwkew: ', lengthOfLongestSubstring('pwwkew'))
export {}
