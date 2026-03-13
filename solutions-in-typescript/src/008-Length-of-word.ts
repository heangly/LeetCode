// Time: O(N)
// Space: O(1)
function lengthOfLastWord(s: string): number {
  let len = 0
  let i = s.length - 1

  // Skip all white space
  while (i >= 0 && s[i] === ' ') {
    i--
  }

  // Count word
  while (i >= 0 && s[i] !== ' ') {
    i--
    len++
  }

  return len
}
