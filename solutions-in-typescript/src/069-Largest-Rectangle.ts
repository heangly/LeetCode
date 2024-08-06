function largestRectangleArea(heights: number[]): number {
  let min = heights[0]
  let max = 0

  for (let i = 1; i < heights.length; i++) {
    const curr = heights[i]
    min = Math.min(min, curr)

    const val = (i + 1) * min
    max = Math.max(max, val)
  }

  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
