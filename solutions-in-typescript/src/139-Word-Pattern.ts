// Time: O(N)
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')
  const tableChar: Record<string, string> = {}
  const tableWord: Record<string, string> = {}

  if (words.length !== pattern.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]

    if (Object.hasOwn(tableChar, char) && tableChar[char] !== word) return false
    if (Object.hasOwn(tableWord, word) && tableWord[word] !== char) return false

    tableChar[char] = word
    tableWord[word] = char
  }

  return true
}
