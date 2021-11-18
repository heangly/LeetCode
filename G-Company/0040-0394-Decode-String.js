/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = []
  const charStack = []
  let ans = []

  let i = 0

  while (i < s.length) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      ans.push(s[i])
      i++
    } else if (s[i] === '[') {
      charStack.push(ans.join(''))
      ans = []
      i++
    } else if (s[i] === ']') {
      const num = numStack.pop()
      const char = [charStack.pop()]

      for (let i = 0; i < num; i++) {
        char.push(ans.join(''))
      }
      ans = char
      i++
    } else {
      let count = 0
      while (s[i] >= '0' && s[i] <= '9') {
        count = count * 10 + Number(s[i])
        i++
      }
      numStack.push(count)
    }
  }
  return ans.join('')
}
