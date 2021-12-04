const wordBreak = (s, wordDict) => {
  const table = new Array(s.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i < s.length + 1; i++) {
    if (table[i] === true) {
      for (const word of wordDict) {
        if (s.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }

  return table[s.length]
}
