// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// Time: O(s) where s is the length of s | Space: O(1)
const maxDepth = (s) => {
  let countOpenParan = 0
  let max = 0

  for (const char of s) {
    if (char === '(') {
      countOpenParan++
      max = Math.max(max, countOpenParan)
    } else if (char === ')') {
      countOpenParan--
    }
  }

  return max
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'))
console.log(maxDepth('(1)+((2))+(((3)))'))
