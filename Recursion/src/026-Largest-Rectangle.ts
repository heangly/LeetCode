const largestRectangleArea = (heights: number[]): number => {
  heights.push(0)
  const stack: number[][] = []
  let res = 0

  for (let i = 0; i < heights.length; i++) {
    let heightStart = i
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [pos, height] = stack.pop()!
      res = Math.max(res, (i - pos) * height)
      heightStart = pos
    }

    stack.push([heightStart, heights[i]])
  }

  return res
}

console.log(largestRectangleArea([0]))
