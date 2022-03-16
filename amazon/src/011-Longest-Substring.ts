// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongstSubstring = (s: string): number => {
  const memo = new Map<string, number>()
  let longest = -Infinity
  let startIdx = 0
  let i = 0

  while (i < s.length) {
    const char = s[i]

    if (memo.has(char)) {
      longest = Math.max(longest, i - startIdx)
      startIdx = Math.max(startIdx, memo.get(char)! + 1)
    }

    memo.set(char, i)
    i++
  }

  return Math.max(longest, i - startIdx)
}

console.log('====================================')
console.log(lengthOfLongstSubstring('abcabcbb'))
console.log('====================================')
export {}
