// Time: O(n) |  Space: O(c) where c is the length of longest common prefx
const longestCommonPrefix = (str: string[]): string => {
  if (str.length < 1) return ''
  if (str.length === 1) return str[0]

  let ans: string[] = []
  str.sort()

  const string1 = str[0]
  const string2 = str[str.length - 1]

  let idx = 0

  while (idx < string1.length && idx < string2.length) {
    if (string1[idx] !== string2[idx]) break
    ans.push(string1[idx])
    idx++
  }

  return ans.join('')
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
