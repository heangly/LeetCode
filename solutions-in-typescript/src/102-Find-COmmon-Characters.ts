// Time: O(n * m) | Space: O(n)
const commonChars = (words: string[]): string[] => {
  let output: string[] = []

  for (const letter of words[0]) {
    if (words.every((w) => w.includes(letter))) {
      output.push(letter)
      words = words.map((w) => w.replace(letter, ''))
    }
  }

  return output
}

console.log(
  commonChars(['acabcddd', 'bcbdbcbd', 'baddbadb', 'cbdddcac', 'aacbcccd', 'ccccddda', 'cababaab', 'addcaccd'])
)
