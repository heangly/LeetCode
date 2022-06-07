// Time: O(n(logN)) | Space: O(u) where u is the unqiue intervals
const merge = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0])
  const stacks: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i]
    const [prevStart, prevEnd] = stacks.pop()!

    if (prevEnd >= currentStart) {
      stacks.push([prevStart, Math.max(prevEnd, currentEnd)])
    } else {
      stacks.push([prevStart, prevEnd], [currentStart, currentEnd])
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
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
)
