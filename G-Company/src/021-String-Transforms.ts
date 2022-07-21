// https://leetcode.com/problems/string-transforms-into-another-string/
// Time: O(n) | Space: O(u) where u is the unique character of the str1
const canConvert = (str1: string, str2: string): boolean => {
  if (str1 === str2) return true

  const table: { [key: string]: string } = {}
  const t2 = new Set<string>()

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in table && table[str1[i]] !== str2[i]) return false

    t2.add(str2[i])
    table[str1[i]] = str2[i]
  }

  return t2.size !== 26
}

console.log(canConvert('aabcc', 'ccdee'))
console.log(canConvert('leetcode', 'codeleet'))
console.log(canConvert('aa', 'ae'))
