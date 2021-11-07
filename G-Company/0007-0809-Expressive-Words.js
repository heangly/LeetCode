const expressiveWords = (S, words) => {
  let ans = 0
  for (const w of words) {
    if (isWord(S, w)) {
      ans += 1
    }
  }
  return ans
}

const isWord = (S, W) => {
  let j = 0

  for (let i = 0; i < S.length; i++) {
    if (S[i] === W[j]) {
      j += 1
    } else if (S[i] === S[i - 1] && S[i - 1] === S[i - 2]) {
      continue
    } else if (S[i] === S[i - 1] && S[i] === S[i + 1]) {
      continue
    } else {
      return false
    }
  }

  return j === W.length
}
