// Time: O(N) | Space: O(N)
// String.fromCharCode(number) -> alphabet
// 'sth'.charCodeAt(0) -> give the unicode/number of that char
function greatestLetter(s: string): string {
  for (let i = 25; i >= 0; i--) {
    const upperStartingValue = 65
    const lowerStartingValue = 97
    const upper = String.fromCharCode(upperStartingValue + i)
    const lower = String.fromCharCode(lowerStartingValue + i)
    if (s.includes(upper) && s.includes(lower)) return upper
  }

  return ''
}
