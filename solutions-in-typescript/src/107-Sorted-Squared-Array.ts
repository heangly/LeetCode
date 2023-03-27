// Time: O(N) | Space: O(N)
const sortedSquaredArray = (array: number[]) => {
  const output = new Array(array.length).fill(0)
  let smallIndex = 0
  let largeIndex = array.length - 1
  let outputIndex = output.length - 1

  while (smallIndex <= largeIndex) {
    const smallValue = array[smallIndex] * array[smallIndex]
    const largeValue = array[largeIndex] * array[largeIndex]

    if (smallValue > largeValue) {
      output[outputIndex] = smallValue
      smallIndex++
    } else {
      output[outputIndex] = largeValue
      largeIndex--
    }
    outputIndex--
  }
  return output
}

console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))
