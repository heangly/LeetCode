// https://leetcode.com/problems/minimum-window-subsequence/
// Time: O(s1  * s2) | Space: O(1)
const minWindow = (s1: string, s2: string): string => {
  let s1Idx = s1.indexOf(s2[0])
  if (s1Idx === -1) return ''

  let s2Idx = 0
  let ans = ''
  let subStringLen = Infinity

  while (s1Idx < s1.length) {
    if (s1[s1Idx] === s2[s2Idx]) s2Idx++

    if (s2Idx === s2.length) {
      s2Idx--
      let endIdx = s1Idx

      while (s2Idx >= 0) {
        if (s1[s1Idx] === s2[s2Idx]) s2Idx--
        s1Idx--
      }

      s1Idx++
      s2Idx++

      const newLen = endIdx + 1 - s1Idx
      if (newLen < subStringLen) {
        subStringLen = newLen
        ans = s1.slice(s1Idx, endIdx + 1)
      }
    }

    s1Idx++
  }

  return ans
}

console.log(minWindow('abcdebdde', 'bde'))
console.log(minWindow('jmeqksfrsdcmsiwvaovztaqenprpvnbstl', 'u'))
