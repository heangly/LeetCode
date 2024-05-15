// Time: O(N) | Space: O(N)
function mostCommonWord(paragraph: string, banned: string[]): string {
  const bannedSet = new Set(banned.toString().toLowerCase().split(','))
  const map: Record<string, number> = {}
  const ans = { word: '', freq: 0 }

  const newParagraph = processParagraph(paragraph, bannedSet)

  for (const word of newParagraph) {
    map[word] = (map[word] || 0) + 1
    if (map[word] > ans.freq) {
      ans.word = word
      ans.freq = map[word]
    }
  }

  return ans.word
}

const processParagraph = (paragraph: string, bannedSet: Set<string>): string[] => {
  const lower = paragraph.toLowerCase()
  let i = 0
  let stringBuilder = ''
  const symbols = "!?',;. ".split('')
  const output: string[] = []

  while (i < lower.length) {
    if (symbols.includes(lower[i])) {
      if (stringBuilder.length && !bannedSet.has(stringBuilder)) {
        output.push(stringBuilder)
      }
      while (symbols.includes(lower[i])) i++
      stringBuilder = ''
    } else {
      stringBuilder += lower[i]
      i++
    }
  }

  stringBuilder.length && !bannedSet.has(stringBuilder) && output.push(stringBuilder)
  return output
}

const paragraph = 'Bob. hIt, baLl'
const banned = ['bob', 'Hit']

console.log(mostCommonWord(paragraph, banned))
