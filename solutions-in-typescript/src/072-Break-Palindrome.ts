const breakPalindrome = (palindrome: string): string => {
  if (palindrome.length <= 1) return ''
  const newString = palindrome.split('')
  for (let i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] !== 'a') {
      newString[i] = 'a'
      return newString.join('')
    }
  }

  newString[newString.length - 1] = 'b'
  return newString.join('')
}

console.log('====================================')
console.log(breakPalindrome('aba'))
console.log('====================================')
