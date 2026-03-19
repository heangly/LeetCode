// Time: O(N) | Space: O(1)
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  const baseWord = strs[0]

  for (let i = 0; i < baseWord.length; i++) {
    for (const word of strs) {
      if (i >= word.length || word[i] !== baseWord[i]) {
        return baseWord.slice(0, i)
      }
    }
  }

  return baseWord
}
