var longestStrChain = function (words) {
  const dp = new Array(words.length).fill(1)
  words.sort((a, b) => a.length - b.length)

  for (let i = 1; i < words.length; i++) {
    let j = i
    while (j > 0) {
      if (
        words[i].length - 1 === words[j - 1].length &&
        isChain(words[i], words[j - 1])
      ) {
        dp[i] = Math.max(dp[j - 1] + 1, dp[i])
      }
      j--
    }
  }

  return Math.max(...dp)
}

const isChain = (mainWord, subWord) => {
  let p1 = 0
  let p2 = 0

  while (p1 < mainWord.length) {
    if (mainWord[p1] === subWord[p2]) {
      p1++
      p2++
    } else {
      p1++
    }
  }

  return p2 === subWord.length
}
