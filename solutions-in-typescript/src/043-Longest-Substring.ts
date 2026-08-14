// Time: O(N)
// Space: O(N)
function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let max = 0
  const lastSeen: Record<string, number> = {}

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    if (lastSeen[char] !== undefined) {
      left = Math.max(left, lastSeen[char] + 1)
    }

    lastSeen[char] = right
    max = Math.max(max, right - left + 1)
  }

  return max
}
