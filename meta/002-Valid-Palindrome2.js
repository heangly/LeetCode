const validPalindrome = (s) => {
  let left = 0
  let right = s.length - 1

  while (left <= right) {
    if (s[left] !== s[right]) {
      return isPalidrome(left + 1, right, s) || isPalidrome(left, right - 1, s)
    }
    left++
    right--
  }

  return true
}

const isPalidrome = (left, right, s) => {
  while (left <= right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}

console.log(validPalindrome('abac'))
