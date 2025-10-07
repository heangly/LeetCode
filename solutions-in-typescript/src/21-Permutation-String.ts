// Time: O(n + m) | Space: O(n)
function checkInclusion(s1: string, s2: string): boolean {
  const need = Array.from({ length: 26 }, () => 0)
  const window = Array.from({ length: 26 }, () => 0)
  let left = 0
  let right = 0

  for (const char of s1) {
    const index = getCharIndex(char)
    need[index]++
  }

  while (right < s2.length) {
    const s2Index = getCharIndex(s2[right])
    window[s2Index]++

    const len = right - left + 1

    if (len === s1.length) {
      if (compareArray(need, window)) return true
      const indexToRemove = getCharIndex(s2[left])

      //slide the window and remove
      window[indexToRemove]--
      left++
    }

    right++
  }

  return false
}

const getCharIndex = (char: string) => {
  return char.charCodeAt(0) - 97
}

const compareArray = (s1: number[], s2: number[]): boolean => {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) return false
  }
  return true
}
