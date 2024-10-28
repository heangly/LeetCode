// Time: O(N) | Space: O(N)
function largestRectangleArea(heights: number[]): number {
  heights.push(0)
  const stack: { index: number; val: number }[] = []
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    const currHeight = heights[i]
    while (stack.length && currHeight < stack[stack.length - 1].val) {
      const topStack = stack.pop()!
      const width = stack.length === 0 ? i : i - stack[stack.length - 1].index - 1
      const height = topStack.val
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push({ index: i, val: heights[i] })
  }

  return maxArea
}
