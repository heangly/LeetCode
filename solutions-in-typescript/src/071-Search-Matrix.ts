function searchMatrix(matrix: number[][], target: number): boolean {
  let startRowIndex = 0
  let lastRowIndex = matrix.length - 1

  while (startRowIndex <= lastRowIndex) {
    const midRowIndex = Math.floor((startRowIndex + lastRowIndex) / 2)
    const currRow = matrix[midRowIndex]
    const firstElement = currRow[0]
    const lastElement = currRow[currRow.length - 1]

    if (target < firstElement) {
      lastRowIndex = midRowIndex - 1
    } else if (target > lastElement) {
      startRowIndex = midRowIndex + 1
    } else {
      // Target is within the current row, perform binary search within the row
      let leftIndex = 0
      let rightIndex = currRow.length - 1
      while (leftIndex <= rightIndex) {
        const midColIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (currRow[midColIndex] === target) {
          return true
        } else if (currRow[midColIndex] < target) {
          leftIndex = midColIndex + 1
        } else {
          rightIndex = midColIndex - 1
        }
      }
      return false // Target is not in the current row
    }
  }

  return false // Target is not found in any row
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    31
  )
)
