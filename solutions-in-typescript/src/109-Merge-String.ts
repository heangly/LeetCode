// Time: (O(n + m)) || Space: O(n + m)
function mergeAlternately(word1: string, word2: string): string {
  let i = 0
  let j = 0
  const res: string[] = []

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      res.push(word1[i])
      i++
    }

    if (j < word2.length) {
      res.push(word2[j])
      j++
    }
  }

  return res.join('')
}
