// Time: O(n) | Space: O(n)
const makeGood = (s: string): string => {
  const stack: string[] = [s[0]]

  for (let i = 1; i < s.length; i++) {
    const currentChar = s[i]

    if (
      stack.length &&
      stack[stack.length - 1] !== currentChar &&
      stack[stack.length - 1].toLowerCase() === currentChar.toLowerCase()
    ) {
      stack.pop()
    } else {
      stack.push(currentChar)
    }
  }

  return stack.join('')
}

console.log('====================================')
console.log(makeGood('leEeetcode'))
console.log('====================================')
