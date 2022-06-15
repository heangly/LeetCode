const longestStrChain = (words: string[]): number => {
  const dp = new Array(words.length).fill(1)
  words.sort((a, b) => a.length - b.length)

  for (let i = 1; i < words.length; i++) {
    let j = i

    while (j > 0) {
      if (
        words[i].length - 1 === words[j - 1].length &&
        isChain(words[i], words[j - 1])
      ) {
        dp[i] = Math.max(dp[i], dp[j - 1] + 1)
      }
      j--
    }
  }

  return Math.max(...dp)
}

const isChain = (mainWord: string, subWord: string): boolean => {
  let pointer = 0

  for (let i = 0; i < mainWord.length; i++) {
    if (mainWord[i] === subWord[pointer]) pointer++
    if (pointer === subWord.length) return true
  }

  return pointer === subWord.length
}
