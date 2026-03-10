// Time: O(N)
// Space: O(1)
function isSubsequence(s: string, t: string): boolean {
  const sLen = s.length
  if (t.length < sLen) return false
  if (sLen === 0) return true

  let i = 0

  for (const char of t) {
    if (char === s[i]) {
      i++
      if (i === sLen) return true
    }
  }

  return false
}
