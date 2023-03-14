// Time: O(m + n) | Space: O(1)
const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) return ''
  let m = str1.length
  let n = str2.length

  const gcd = (x: number, y: number): number => {
    if (!y) return x
    return gcd(y, x % y)
  }

  const div = gcd(m, n)
  return str1.slice(0, div)
}

console.log(gcdOfStrings('ABCDEF', 'ABC'))
