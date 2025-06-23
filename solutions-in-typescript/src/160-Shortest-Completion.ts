// Time: O(L + n * k)
// Space: O(1)
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  let shortest = ''
  const table: Record<string, number> = {}

  for (const char of licensePlate) {
    const newChar = char.toLowerCase()
    if (isNumber(newChar) || newChar === ' ') continue
    table[newChar] = (table[newChar] || 0) + 1
  }

  for (const word of words) {
    const copy = { ...table }

    for (const char of word) {
      if (char in copy) {
        copy[char]--
      }
    }

    const isValid = Object.values(copy).every((count) => count <= 0)

    if (isValid && (shortest === '' || word.length < shortest.length)) {
      shortest = word
    }
  }

  return shortest
}

const isNumber = (str: string): boolean => str >= '0' && str <= '9'
