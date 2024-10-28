const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i]
    const [prevStart, prevEnd] = intervals[i - 1]

    if (currStart <= prevEnd) {
      intervals[i] = [prevStart, Math.max(currEnd, prevEnd)]
      intervals[i - 1] = null
    }
  }

  return intervals.filter((interval) => interval !== null)
}

console.log(
  merge([
    [8, 10],
    [15, 18],
    [1, 3],
    [2, 6]
  ])
)

// merge when i+1(start) <= i(end)
// new = [i(start), Max(i(end), i+1(end) )
