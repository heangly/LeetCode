//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
/**
 * @param {string} s
 * @return {number}
 */

const minAddToMakeValid = (s) => {
  let openBrackets = 0
  let closeBrackets = 0

  for (const bracket of s) {
    if (bracket === '(') {
      openBrackets++
    } else {
      if (openBrackets > 0) {
        openBrackets--
      } else {
        closeBrackets++
      }
    }
  }

  return openBrackets + closeBrackets
}

const s = '()))(('
// const s = '())'
// const s = '((('
console.log(minAddToMakeValid(s))
