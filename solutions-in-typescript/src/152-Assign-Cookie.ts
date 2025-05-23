// Time: O(glog(g) + slog(s))
// Space: O(1)
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let i = 0
  let j = 0

  while (i < s.length && j < g.length) {
    if (s[i] >= g[j]) {
      j++
    }
    i++
  }

  return j
}
