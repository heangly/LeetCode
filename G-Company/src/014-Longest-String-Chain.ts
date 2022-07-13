// https://leetcode.com/problems/longest-string-chain/

// Time: O(n^2) | Space: O(n)
const longestStrChain = (words: string[]): number => {
  const dp = new Array(words.length).fill(1)
  words.sort((a, b) => a.length - b.length)
  let max = 1

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i]
    let j = i

    while (j > 0) {
      if (
        currentWord.length - 1 === words[j - 1].length &&
        isChain(currentWord, words[j - 1])
      ) {
        dp[i] = Math.max(dp[i], dp[j - 1] + 1)
        max = Math.max(dp[i], max)
      }
      j--
    }
  }
  return max
}

const isChain = (longWord: string, shortWord: string): boolean => {
  let p = 0

  for (const w of longWord) {
    if (w === shortWord[p]) p++
  }

  return p === shortWord.length
}

const words1 = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
const words2 = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']
const words3 = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
// console.log(longestStrChain(words1))
// console.log(longestStrChain(words2))
console.log(longestStrChain(words3))
