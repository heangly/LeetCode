/**
 * @param {string[]}
 * @return {string}
 */

// Time: O(nlog(n)) | Space: O(c) where c is the length of common characters
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0]
  }

  strs.sort()

  let firstElement = strs[0]
  let lastElement = strs[strs.length - 1]

  let idx = 0
  let ans = []

  while (idx < firstElement.length && firstElement[idx] === lastElement[idx]) {
    ans.push(firstElement[idx])
    idx += 1
  }

  return ans.join('')
}
