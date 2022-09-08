/**
 * @param {string}s
 * @return {string}
 */

// Time: O(n * maxK^countK) where s is the lengt | Space: O(s)
const decodeString = (s) => {
  const stack = []

  for (const char of s) {
    if (char !== ']') {
      stack.push(char)
    } else {
      let letters = ''
      while (stack[stack.length - 1] !== '[') {
        letters = stack.pop() + letters
      }

      // pop the '['
      stack.pop()

      let num = ''
      while (!isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num
      }

      const newString = letters.repeat(parseInt(num))
      stack.push(newString)
    }
  }

  return stack.join('')
}

console.log(decodeString('3[a]2[bc]'), decodeString('3[a]2[bc]') === 'aaabcbc')
console.log(decodeString('3[a2[c]]'), decodeString('3[a2[c]]') === 'accaccacc')
console.log(
  decodeString('2[abc]3[cd]ef'),
  decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef'
)
console.log(decodeString('100[leetcode]'))
