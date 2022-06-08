// Time: O(nlog(n)) | Space: O(n)
const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  const arr = [...intervals, newInterval].sort((a, b) => a[0] - b[0])
  const stacks: number[][] = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    const [prevStart, prevEnd] = stacks.pop()!
    const [currStart, currEnd] = arr[i]

    if (prevEnd >= currStart) {
      stacks.push([prevStart, Math.max(prevEnd, currEnd)])
    } else {
      stacks.push([prevStart, prevEnd])
      stacks.push(arr[i])
    }
  }

  return stacks
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9]
    ],
    [2, 5]
  )
)
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ],
    [4, 8]
  )
)
