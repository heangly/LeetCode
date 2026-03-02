// Time: O(N)
// Space: O(N)
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const count: Record<string, number> = {}

  for (const c of s) {
    count[c] = (count[c] ?? 0) + 1
  }

  for (const c of t) {
    if (!count[c]) return false
    count[c]--
  }

  return true
}
