// Time: O(N)
// Space: O(1)
const scoreofString = (s: string): number => {
  let output = 0

  for (let i = 1; i < s.length; i++) {
    const first = s[i - 1].charCodeAt(0)
    const second = s[i].charCodeAt(0)
    const val = Math.abs(first - second)
    output += val
  }

  return output
}

console.log(scoreofString('hello'))
