// Time: O(N)
// Space: O(N)
function mergeAlternately(word1: string, word2: string): string {
  let i = 0
  let j = 0
  const output: string[] = []

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      output.push(word1[i])
      i++
    }

    if (j < word2.length) {
      output.push(word2[j])
      j++
    }
  }

  return output.join('')
}
