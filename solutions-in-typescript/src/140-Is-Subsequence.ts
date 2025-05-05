// Time: O(N)
// Space: O(1)
function isSubsequence(s: string, t: string): boolean {
  let index = 0

  for (let i = 0; i < t.length; i++) {
    const charS = s[index]
    const charT = t[i]

    if (charS === charT) {
      index++
    }
  }

  return index === s.length
}
