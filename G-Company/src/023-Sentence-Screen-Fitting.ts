// https://leetcode.com/problems/sentence-screen-fitting/
// Time: O(r * s) where r is row and s is length of element in sentence | Space: O(1)
const wordsTyping = (
  sentence: string[],
  rows: number,
  cols: number
): number => {
  let currCol = 0
  let currRow = 0
  let wordIdx = 0
  let fittedNumber = 0

  while (currRow !== rows) {
    if (wordIdx === sentence.length) {
      wordIdx = 0
      fittedNumber++
    }

    if (currCol + sentence[wordIdx].length > cols) {
      currRow++
      currCol = 0
    } else {
      currCol += sentence[wordIdx].length + 1
      wordIdx++
    }
  }
  return fittedNumber
}

console.log(wordsTyping(['hello', 'world'], 2, 8))
console.log(wordsTyping(['a', 'bcd', 'e'], 3, 6))
