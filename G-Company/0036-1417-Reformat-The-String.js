/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  if (s.length <= 1) return s

  const digitArray = []
  const letterArray = []

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      digitArray.push(char)
    } else {
      letterArray.push(char)
    }
  }

  if (
    digitArray.length === 0 ||
    letterArray.length === 0 ||
    Math.abs(digitArray.length - letterArray.length) >= 2
  )
    return ''

  const ans = []

  if (digitArray.length < letterArray.length) {
    formatString(digitArray, letterArray, ans)
  } else {
    formatString(letterArray, digitArray, ans)
  }

  return ans.join('')
}

const formatString = (shortArray, longArray, ans) => {
  let idx = 0

  for (const long of longArray) {
    ans.push(long)
    if (idx < shortArray.length) {
      ans.push(shortArray[idx])
      idx++
    }
  }
}
