// Time: O(n * m) | Space: O(n * m)
const setZeroes = (matrix: number[][]): void => {
  const row = new Set<number>()
  const col = new Set<number>()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        !row.has(i) && row.add(i)
        !col.has(j) && col.add(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row.has(i) || col.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}

console.log(
  setZeroes([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0]
  ])
)

export {}
