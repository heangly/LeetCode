// Time: O(N) | Space: O(N)
function evalRPN(tokens: string[]): number {
  const operators = new Set(['+', '-', '*', '/'])
  const stack: number[] = []

  for (const token of tokens) {
    if (operators.has(token)) {
      const secondNum = stack.pop()!
      const firstNum = stack.pop()!
      let val: number

      if (token === '+') {
        val = firstNum + secondNum
      } else if (token === '-') {
        val = firstNum - secondNum
      } else if (token === '/') {
        val = Math.trunc(firstNum / secondNum)
      } else {
        val = firstNum * secondNum
      }

      stack.push(val)
    } else {
      stack.push(+token)
    }
  }

  return stack.pop()!
}
