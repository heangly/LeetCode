var longestStrChain = function (words) {
  const obj = {}
  words.sort((a, b) => a.length - b.length)

  for (const word of words) {
    let longest = 0
    for (let i = 0; i < word.length; i++) {
      let w = word.slice(0, i) + word.slice(i + 1)
      longest = Math.max(longest, (obj[w] || 0) + 1)
    }
    obj[word] = longest
  }

  return Math.max(...Object.values(obj))
}
