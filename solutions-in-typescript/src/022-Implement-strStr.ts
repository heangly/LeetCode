const strStr = (haystack: string, needle: string): number => {
  return !needle.length ? 0 : haystack.indexOf(needle)
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
export {}
