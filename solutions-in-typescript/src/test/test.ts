export function quickselect(array: number[], k: number) {
  let startIndex = 0
  let endIndex = array.length - 1

  while (true) {
    let pivot = startIndex
    let left = pivot + 1
    let right = endIndex

    while (left <= right) {
      if (array[left] > array[pivot] && array[right] < array[pivot]) {
        ;[array[left], array[right]] = [array[right], array[left]]
      }

      if (array[left] <= array[pivot]) {
        left++
      }

      if (array[right] >= array[pivot]) {
        right--
      }
    }

    ;[array[pivot], array[right]] = [array[right], array[pivot]]

    if (right === k - 1) return array[right]

    if (right > k - 1) {
      endIndex = right - 1
    } else {
      startIndex = right + 1
    }
  }
}

console.log(quickselect([8, 5, 2, 9, 7, 6, 3], 3))
