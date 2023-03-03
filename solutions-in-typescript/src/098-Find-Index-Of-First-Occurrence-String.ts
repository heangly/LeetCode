// Time: O(n) | Space: O(1)
const strStr = (haystack: string, needle: string): number => {
  return haystack.indexOf(needle)
}

const haystack = 'abc'
const needle = 'c'
console.log(strStr(haystack, needle))
