// Time: O(N)
// Space: O(N)
function calPoints(operations: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < operations.length; i++) {
    const curr = operations[i]
    const lastIndex = stack.length - 1

    if (curr === '+') {
      stack.push(Number(stack[lastIndex - 1]) + Number(stack[lastIndex]))
    } else if (curr === 'D') {
      stack.push(2 * Number(stack[lastIndex]))
    } else if (curr === 'C') {
      stack.pop()
    } else {
      stack.push(Number(curr))
    }
  }

  return stack.reduce((acc, curr) => curr + acc, 0)
}
