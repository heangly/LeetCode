// Time: O(N) | Space: O(1)
function isValid(word: string): boolean {
  if (word.length < 3) return false

  let hasV = false
  let hasC = false

  for (const char of word) {
    if (/[0-9]/.test(char)) continue

    if (/[aeiou]/i.test(char)) {
      hasV = true
    } else if (/[a-z]/i.test(char)) {
      hasC = true
    } else {
      return false
    }
  }

  return hasV && hasC
}
