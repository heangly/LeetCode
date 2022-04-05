// Time: O(n) | Space: O(1)
const romanToInt = (s: string): number => {
  const table = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  let ans = 0

  for (let i = 0; i < s.length; i++) {
    const currNum = table.get(s[i])!
    const nextNum = table.get(s[i + 1])! || 0
    ans += currNum < nextNum ? currNum * -1 : currNum
  }

  return ans
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
