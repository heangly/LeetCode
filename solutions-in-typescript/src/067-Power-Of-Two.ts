const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) return false

  while (n % 2 === 0) {
    n /= 2
  }

  return n === 1
}

console.log('====================================')
console.log(isPowerOfTwo(16))
console.log('====================================')
