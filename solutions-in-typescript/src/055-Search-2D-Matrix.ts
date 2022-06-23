// Time: O(n + log(n)) | Space: O(1)
const searchMatrix = (matrix: number[][], target: number): boolean => {
  let row = 0
  let col = matrix[0].length - 1

  while (
    row >= 0 &&
    row < matrix.length &&
    col >= 0 &&
    col < matrix[0].length
  ) {
    const value = matrix[row][col]

    if (value === target) return true
    if (value < target) {
      row++
    } else {
      col--
    }
  }
  return false
}

console.log(searchMatrix([[1, 3]], 3))
