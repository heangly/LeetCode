//https://leetcode.com/problems/reverse-string/

const reverseString = (s: string[]) => {
  help(0, s.length - 1, s)
}

const help = (i: number, j: number, s: string[]) => {
  if (i >= j) return
  ;[s[i], s[j]] = [s[j], s[i]]

  help(i + 1, j - 1, s)
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
