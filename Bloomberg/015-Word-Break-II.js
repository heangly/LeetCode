// https://leetcode.com/problems/word-break-ii/

const wordBReak = (s, wordDict) => {
  const dict = new Set(wordDict)
  const output = []

  const helper = (idx, strSoFar, tempArr) => {
    if (idx >= s.length) {
      output.push(tempArr.join(' '))
      return
    }

    for (let i = idx; i < s.length; i++) {
      strSoFar += s[i]
      if (dict.has(strSoFar)) {
        helper(i + 1, '', tempArr.concat(strSoFar))
      }
    }
  }

  helper(0, '', [])

  return output
}

const s = 'catsanddog'
const wordDict = ['cat', 'cats', 'and', 'sand', 'dog']
console.log(wordBReak(s, wordDict))
