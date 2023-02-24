// Time: O(n * c) where c is length of character of each word
// Space: O(c) where c is is the length of chars
const countCharacters = (words: string[], chars: string): number => {
  const table: Record<string, number> = {}
  let count = 0

  for (const char of chars) {
    table[char] = (table[char] || 0) + 1
  }

  for (const word of words) {
    const tempTable = { ...table }
    let i = 0
    while (i < word.length) {
      if (!!!tempTable[word[i]]) break
      tempTable[word[i]]--
      i++
    }

    if (i === word.length) {
      count += word.length
    }
  }

  return count
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
