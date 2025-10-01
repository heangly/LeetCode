function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0
  let bottom = matrix.length - 1

  while (top <= bottom) {
    const mid = Math.floor((top + bottom) / 2)
    const midArray = matrix[mid]
    const firstElement = midArray[0]
    const lastElement = midArray[midArray.length - 1]

    if (firstElement === target || lastElement === target) return true

    if (firstElement < target && lastElement > target) {
      let left = 0
      let right = midArray.length - 1

      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (midArray[mid] === target) return true

        if (midArray[mid] > target) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }

      return false
    } else if (target > lastElement) {
      top = mid + 1
    } else {
      bottom = mid - 1
    }
  }

  return false
}
