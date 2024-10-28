// Time: O(N) | Space: O(N)
function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (const token of tokens) {
    if (['+', '-', '*', '/'].includes(token)) {
      const secondNum = stack.pop()!
      const firstNum = stack.pop()!
      let result: number

      switch (token) {
        case '+':
          result = firstNum + secondNum
          break
        case '-':
          result = firstNum - secondNum
          break
        case '*':
          result = firstNum * secondNum
          break
        case '/':
          result = Math.trunc(firstNum / secondNum)
          break
        default:
          throw new Error(`Unknown operator: ${token}`)
      }

      stack.push(result)
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()!
}

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
