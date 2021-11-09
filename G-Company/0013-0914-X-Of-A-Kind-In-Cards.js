const gcd = (a, b) => {
  return b > 0 ? gcd(b, a % b) : a
}

console.log(gcd(6, 9))
console.log(gcd(3, 8))
