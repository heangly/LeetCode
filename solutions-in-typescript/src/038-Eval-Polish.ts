// Time: O(N)
// Space: O(N)
function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  const operator = new Set(['+', '-', '*', '/'])

  for (const token of tokens) {
    if (operator.has(token)) {
      const val2 = stack.pop()!
      const val1 = stack.pop()!

      if (token === '+') {
        stack.push(val1 + val2)
      } else if (token === '-') {
        stack.push(val1 - val2)
      } else if (token === '*') {
        stack.push(val1 * val2)
      } else {
        stack.push(Math.trunc(val1 / val2))
      }
    } else {
      stack.push(+token)
    }
  }

  return stack.pop()!
}
