// Time: O(n) | Space: O(1)
const isPalindrome = (s: string): boolean => {
  const isAlphanumeric = (s: string) => {
    const loweredChar = s.toLowerCase()
    return (
      (loweredChar >= 'a' && loweredChar <= 'z') ||
      (loweredChar >= '0' && loweredChar <= '9')
    )
  }

  let start = 0
  let end = s.length - 1

  while (start < end) {
    while (start < end && !isAlphanumeric(s[start])) start++
    while (start < end && !isAlphanumeric(s[end])) end--

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false

    start++
    end--
  }

  return true
}

console.log(isPalindrome('0P'))

export {}
