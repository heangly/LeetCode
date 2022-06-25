function sortColors(nums: number[]): void {
  quickSort(nums, 0, nums.length - 1)
}

const quickSort = (array: number[], left: number, right: number): void => {
  const idx = partition(array, left, right)

  if (left < idx - 1) {
    quickSort(array, left, idx - 1)
  }

  if (right > idx) {
    quickSort(array, idx, right)
  }
}

const partition = (array: number[], left: number, right: number): number => {
  const mid = Math.floor((left + right) / 2)
  const pivot = array[mid]

  while (left <= right) {
    while (array[left] < pivot) left++
    while (array[right] > pivot) right--

    if (left <= right) {
      ;[array[left], array[right]] = [array[right], array[left]]
      left++
      right--
    }
  }

  return left
}

console.log(sortColors([5, 3, 7, 4, 6, 2, 9, 1]))
