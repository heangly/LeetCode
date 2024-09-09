// Time: O(N) | Space: O(T)
function minWindow(s: string, t: string): string {
  if (t.length > s.length) return ''

  let minSubString = ''
  let minLength = Infinity

  const tFreqMap = new Map<string, number>()
  for (const char of t) {
    tFreqMap.set(char, (tFreqMap.get(char) || 0) + 1)
  }

  const windowFreqMap = new Map<string, number>()
  let have = 0,
    need = tFreqMap.size

  let i = 0
  for (let j = 0; j < s.length; j++) {
    const char = s[j]
    if (tFreqMap.has(char)) {
      windowFreqMap.set(char, (windowFreqMap.get(char) || 0) + 1)
      if (windowFreqMap.get(char) === tFreqMap.get(char)) {
        have++
      }
    }

    // Shrink the window
    while (have === need) {
      if (j - i + 1 < minLength) {
        minLength = j - i + 1
        minSubString = s.slice(i, j + 1)
      }

      const leftChar = s[i]
      if (tFreqMap.has(leftChar)) {
        windowFreqMap.set(leftChar, windowFreqMap.get(leftChar)! - 1)
        if (windowFreqMap.get(leftChar)! < tFreqMap.get(leftChar)!) {
          have--
        }
      }
      i++
    }
  }

  return minSubString
}
