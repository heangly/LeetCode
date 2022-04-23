// Time: O(n) | Space: O(p) where p is the open parenthesis
const isValid = (s: string): boolean => {
  const table = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  const stack: string[] = []

  for (const paren of s) {
    // when seeing opening parenthesis
    if (!table.has(paren)) {
      stack.push(paren)
    } else {
      //when seeing closing parenthesis
      if (table.get(paren) === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

for (const input of ['()', '()[]{}', '(]']) {
  console.log(isValid(input))
}
