//  Time: O(N) | Space: O(N)
function characterReplacement(s: string, k: number): number {
  let left = 0
  let maxLength = 0
  let mostCharCount = 0
  const table: Record<string, number> = {}

  for (let right = 0; right < s.length; right++) {
    let len = right - left + 1
    const char = s[right]
    table[char] = (table[char] || 0) + 1
    mostCharCount = Math.max(mostCharCount, table[char])

    while (len - mostCharCount > k) {
      table[s[left]]--
      left++
      len = right - left + 1
    }

    maxLength = Math.max(maxLength, len)
  }

  return maxLength
}

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))
console.log(characterReplacement('ABBB', 2))
