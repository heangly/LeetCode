// Time: O(N)
// Space: O(N)
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const sToT: Record<string, string> = {}
  const tToS: Record<string, string> = {}

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (sToT[charS] && sToT[charS] !== charT) return false
    if (tToS[charT] && tToS[charT] !== charS) return false

    sToT[charS] = charT
    tToS[charT] = charS
  }

  return true
}
