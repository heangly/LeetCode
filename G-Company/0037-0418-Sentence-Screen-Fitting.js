var wordsTyping = function (sentence, rows, cols) {
  let currRow = 0
  let ans = 0
  let r = 0
  let word = 0

  while (r !== rows) {
    if (word === sentence.length) {
      word = 0
      ans++
    }

    if (currRow + sentence[word].length > cols) {
      r++
      currRow = 0
    } else {
      currRow += sentence[word].length + 1
      word++
    }
  }
  return ans
}
