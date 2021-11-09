// Time: O(n * m) | Space: O(n * m)
var countSquares = function (matrix) {
  let row = matrix.length + 1
  let column = matrix[0].length + 1

  const newArr = Array(row)
    .fill(0)
    .map((_) => Array(column).fill(0))
  let sum = 0

  for (let i = 1; i < newArr.length; i++) {
    for (let j = 1; j < newArr[i].length; j++) {
      let valueFromOriginalMatrix = matrix[i - 1][j - 1]

      if (valueFromOriginalMatrix > 0) {
        let topValue = newArr[i - 1][j]
        let diagnolValue = newArr[i - 1][j - 1]
        let leftValue = newArr[i][j - 1]
        let minimumValue = Math.min(topValue, diagnolValue, leftValue) + 1

        newArr[i][j] = minimumValue
        sum += minimumValue
      }
    }
  }

  return sum
}
