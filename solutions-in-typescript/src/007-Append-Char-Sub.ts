// Time: O(S)
// Space: O(1)
function appendCharacters(s: string, t: string): number {
  let tIndex = 0

  for (const char of s) {
    if (t[tIndex] === char) {
      tIndex++

      if (tIndex === t.length) return 0
    }
  }

  return t.length - tIndex
}
