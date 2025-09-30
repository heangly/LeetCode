// Time: O(N) | Space: O(N)
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = []
  const output = Array.from({ length: temperatures.length }, () => 0)

  for (let i = 0; i < temperatures.length; i++) {
    const curr = temperatures[i]

    while (stack.length && curr > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop()!
      output[top] = i - top
    }

    stack.push(i)
  }

  return output
}
