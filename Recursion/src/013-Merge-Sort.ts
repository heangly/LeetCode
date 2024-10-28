// Time: O(n(Log(n))) | Space: O(n)
const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums

  const midIdx = Math.floor(nums.length / 2)
  const leftArr = mergeSort(nums.slice(0, midIdx))
  const rightArr = mergeSort(nums.slice(midIdx))

  return merge(leftArr, rightArr)
}

const merge = (arr1: number[], arr2: number[]): number[] => {
  let idx1 = 0
  let idx2 = 0
  const output: number[] = []

  while (idx1 < arr1.length || idx2 < arr2.length) {
    const v1 = arr1[idx1] ?? Infinity
    const v2 = arr2[idx2] ?? Infinity

    if (v1 < v2) {
      output.push(v1)
      idx1++
    } else {
      output.push(v2)
      idx2++
    }
  }

  return output
}

// console.log('====================================')
// console.log(mergeSort([-1, 2, -8, -10]))
// console.log('====================================')

console.log('====================================')
console.log(merge([-1, 2], [-10, -8]))
console.log('====================================')

export {}
