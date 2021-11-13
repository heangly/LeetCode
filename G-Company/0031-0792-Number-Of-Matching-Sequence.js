var numMatchingSubseq = function (s, words) {
  let ans = 0

  for (let word of words) {
    let pointer = 0
    let index = 0

    for (const char of word) {
      index = s.indexOf(char, index)

      if (index !== -1) {
        pointer++
        index++
      }

      if (pointer === word.length) {
        ans++
        break
      }
    }
  }

  return ans
}
