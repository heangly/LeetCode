// Time: O(n  * log(m)) where n is number of rows and m and number of cols
const searchMatrix = (matrix: number[][], target: number): boolean => {
  let currentRow = 0

  while (currentRow < matrix.length) {
    const upperBound = matrix[currentRow][matrix[currentRow].length - 1]
    if (target > upperBound) {
      currentRow++
      continue
    }

    let left = 0
    let right = matrix[currentRow].length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (matrix[currentRow][mid] === target) return true
      matrix[currentRow][mid] > target ? right-- : left++
    }

    currentRow++
  }

  return false
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
const target = 5
console.log('====================================')
console.log(searchMatrix(matrix, target))
console.log('====================================')
