function isPalindrome(s: string): boolean {
  const lowerCasedString = s.toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left <= right) {
    while (left < right && !isAlphaNumeric(lowerCasedString[left])) {
      left++
    }

    while (left < right && !isAlphaNumeric(lowerCasedString[right])) {
      right--
    }

    if (lowerCasedString[left] !== lowerCasedString[right]) return false
    left++
    right--
  }

  return true
}

const isAlphaNumeric = (char: string): boolean => {
  return char >= 'a' && char <= 'z'
}

// function isPalindrome(s: string): boolean {
//   const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '')
//   let left = 0
//   let right = normalized.length - 1

//   while (left < right) {
//     if (normalized[left] !== normalized[right]) return false
//     left++
//     right--
//   }

//   return true
// }

// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('"race a car"'))
console.log(isPalindrome(' '))
