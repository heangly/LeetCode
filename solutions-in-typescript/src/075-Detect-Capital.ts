// Time : O(n) | Space: O(1)
const detectCapitalUse = (word: string): boolean => {
  if (word.toUpperCase() === word) return true
  if (word.toLowerCase() === word) return true

  if (word[0].toUpperCase() === word[0]) {
    const newWord = word.slice(1)
    if (newWord.toLowerCase() === newWord) return true
  }

  return false
}

console.log('====================================')
console.log(detectCapitalUse('GoGgle'))
console.log('====================================')

export {}
