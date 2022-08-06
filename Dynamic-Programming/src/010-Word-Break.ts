// https://leetcode.com/problems/word-break/
// Time: O(n^3) | space: O(n)
const wordBreaks = (s: string, wordDict: string[]): boolean => {
  const dict: { [key: string]: boolean } = {}
  for (const word of wordDict) {
    dict[word] = true
  }

  const memo: { [key: string]: boolean } = {}

  const dfs = (start: number): boolean => {
    if (start in memo) return memo[start]
    if (start === s.length) return true

    for (let i = start + 1; i <= s.length; i++) {
      const wordToCheck = s.slice(start, i)
      memo[i] = dfs(i)
      if (wordToCheck in dict && memo[i]) return true
    }

    return false
  }

  return dfs(0)
}

console.log(wordBreaks('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']))
console.log(wordBreaks('aaaaaaa', ['aaaa', 'aaa']))
console.log(wordBreaks('leetcode', ['leet', 'code']))
console.log(wordBreaks('applepenapple', ['apple', 'pen']))
