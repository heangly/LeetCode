// Time: O(row * col) | Space: O(1)
const flipAndInvertImage = (image: number[][]): number[][] => {
  for (let row = 0; row < image.length; row++) {
    const currentRow = image[row]
    let left = 0
    let right = currentRow.length - 1

    while (left <= right) {
      if (left === right) {
        currentRow[left] = currentRow[left] === 0 ? 1 : 0
      } else {
        //Flip
        ;[currentRow[left], currentRow[right]] = [
          currentRow[right],
          currentRow[left]
        ]

        // Invert
        currentRow[left] = currentRow[left] === 0 ? 1 : 0
        currentRow[right] = currentRow[right] === 0 ? 1 : 0
      }

      left++
      right--
    }
  }

  return image
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
)

console.log('')
console.log('====================================')
console.log('')

console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
  ])
)
