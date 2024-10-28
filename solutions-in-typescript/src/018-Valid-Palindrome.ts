const isAlpaNumeric = (str: string): boolean => {
  return (str >= '0' && str <= '9') || (str >= 'a' && str <= 'z')
}

// TIme: O(N) | Space: O(N)
function isPalindrome(s: string): boolean {
  const lowercasedString = s.toLowerCase()
  let left = 0
  let right = lowercasedString.length - 1

  while (left < right) {
    while (left < right && !isAlpaNumeric(lowercasedString[left])) left++
    while (left < right && !isAlpaNumeric(lowercasedString[right])) right--

    if (lowercasedString[left] !== lowercasedString[right]) return false
    left++
    right--
  }

  return true
}
