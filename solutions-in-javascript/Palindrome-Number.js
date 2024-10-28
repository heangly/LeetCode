const isPalindrome = (x) => {
  let numString = String(Math.abs(x))
  return numString === numString.split('').reverse().join('')
}

console.log(isPalindrome(-121))
