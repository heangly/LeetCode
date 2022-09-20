// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// Time: O(S) | Space: O(S) where S is the length of S
const minSteps = (s, t) => {
  const tableS = {}
  let count = 0

  for (const char of s) {
    tableS[char] = (tableS[char] || 0) + 1
  }

  for (const char of t) {
    if (tableS[char]) {
      tableS[char]--
    } else {
      count++
    }
  }

  return count
}

console.log(minSteps('leetcode', 'practice'))
