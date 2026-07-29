// Time: O(N)
// Space: O(N)
function dailyTemperatures(temperatures: number[]): number[] {
  const ans = new Array(temperatures.length).fill(0)
  const stack: number[] = []

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const idx = stack.pop()!
      ans[idx] = i - idx
    }

    stack.push(i)
  }

  return ans
}
