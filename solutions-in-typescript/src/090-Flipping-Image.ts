// Time: O(row * col) | Space: O(1)
const flipAndInvertImage = (image: number[][]): number[][] => {
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].reverse()
    image[i] = image[i].map((x) => 1 - x)
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
