// Time: O(N)
// Space: O(N)
function isPalindrome(s: string): boolean {
  const myString = s.toLowerCase()
  const words = []

  for (const char of myString) {
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      words.push(char)
    }
  }

  let i = 0
  let j = words.length - 1

  while (i <= j) {
    if (words[i] !== words[j]) return false
    i++
    j--
  }

  return true
}
