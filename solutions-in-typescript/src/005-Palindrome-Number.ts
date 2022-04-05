const isPalindrome = (x: number) => {
  const reversedNumber = x.toString().split('').reverse().join('')
  return x.toString() === reversedNumber
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
