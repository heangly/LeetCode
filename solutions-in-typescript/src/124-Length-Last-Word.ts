// Time: O(N) | Space: O(1)
function lengthOfLastWord(s: string): number {
  let count = 0
  let j = s.length - 1

  while (j >= 0 && s[j] === ' ') {
    j--
  }

  while (j >= 0 && s[j] !== ' ') {
    count++
    j--
  }

  return count
}
