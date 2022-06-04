const spiralOrder = (matrix: number[][]): number[] => {
  const ans: number[] = []

  while (matrix.length) {
    ans.push(...matrix.shift()!)

    for (let i = 0; i < matrix.length; i++) {
      const value = matrix[i].pop()
      value && ans.push(value)
      matrix[i].reverse()
    }

    matrix.reverse()
  }

  return ans
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
)
