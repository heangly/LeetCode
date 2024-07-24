// Time: O(N) | Space: O(N)
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: { index: number; temp: number }[] = [{ index: 0, temp: temperatures[0] }]
  const output = Array(temperatures.length).fill(0)

  for (let i = 1; i < temperatures.length; i++) {
    const currentTemp = temperatures[i]
    let j = stack.length - 1

    while (j >= 0 && currentTemp > stack[j].temp) {
      const { index } = stack.pop()!
      output[index] = i - index
      j--
    }

    stack.push({ index: i, temp: temperatures[i] })
  }

  return output
}
