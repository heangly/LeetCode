const wordPattern = (pattern: string, s: string): boolean => {
  const words = s.split(' ')
  const tableChar: Record<string, string> = {}
  const tableWord: Record<string, string> = {}

  if (pattern.length !== words.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i] + '1'
    const word = words[i] + '1'

    if (char in tableChar && tableChar[char] !== word) return false
    if (word in tableWord && tableWord[word] !== char) return false

    tableChar[char] = word
    tableWord[word] = char
  }

  return true
}

const pattern = 'abba'
const s = 'dog constructor constructor dog'

console.log(wordPattern(pattern, s))

export {}
