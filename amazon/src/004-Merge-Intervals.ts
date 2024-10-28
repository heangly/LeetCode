const merge = (intervals: number[][]): number[][] => {
  if (intervals.length < 2) return intervals

  intervals.sort((a, b) => a[0] - b[0])
  const stacks = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const prev = stacks.pop()!
    const curr = intervals[i]

    if (curr[0] <= prev[1]) {
      const newValues = [prev[0], Math.max(prev[1], curr[1])]
      stacks.push(newValues)
    } else {
      stacks.push(prev, curr)
    }
  }

  return stacks
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
