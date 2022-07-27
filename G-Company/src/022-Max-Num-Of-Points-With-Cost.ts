// https://leetcode.com/problems/maximum-number-of-points-with-cost/

const maxPoints = (points: number[][]): number => {
  for (let row = 1; row < points.length; row++) {
    for (let col = 0; col < points[row].length; col++) {
      const currentVal = points[row][col]

      for (
        let previousCol = 0;
        previousCol < points[row - 1].length;
        previousCol++
      ) {
        const previousVal = points[row - 1][previousCol]
        const gain = currentVal + previousVal - Math.abs(previousCol - col)
        points[row][col] = Math.max(points[row][col], gain)
      }
    }
  }

  return Math.max(...points.pop()!)
}

console.log(
  maxPoints([
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1]
  ])
)

console.log(
  maxPoints([
    [1, 5],
    [2, 3],
    [4, 2]
  ])
)
