/**
 * cut into 2 part
 * pick random element as pivot point to divide the array into 2 parts
 * left part is smaller than right part
 */

// Time: O(N)
const quickSelect = (array: number[], k: number) => {
  let startIndex = 0
  let endIndex = array.length - 1

  while (true) {
    let pivotIndex = startIndex
    let leftIndex = pivotIndex + 1
    let rightIndex = endIndex

    while (leftIndex <= rightIndex) {
      if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) {
        swap(leftIndex, rightIndex, array)
      }

      if (array[leftIndex] <= array[pivotIndex]) leftIndex++
      if (array[rightIndex] >= array[pivotIndex]) rightIndex--
    }

    swap(pivotIndex, rightIndex, array)

    if (rightIndex === k - 1) return array[rightIndex]

    if (rightIndex > k - 1) {
      endIndex = rightIndex - 1
    } else {
      startIndex = rightIndex + 1
    }
  }
}

const swap = (i: number, j: number, array: number[]) => {
  ;[array[i], array[j]] = [array[j], array[i]]
}
