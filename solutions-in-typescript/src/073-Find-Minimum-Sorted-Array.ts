// Time: O(log(n)) | Space: O(1)
function findMin(nums: number[]): number {
  let leftIdx = 0
  let rightIdx = nums.length - 1
  let smallest = nums[0]

  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const midVal = nums[midIdx]
    const rightVal = nums[rightIdx]
    smallest = Math.min(smallest, midVal)

    if (midVal > rightVal) {
      leftIdx = midIdx + 1
    } else {
      rightIdx = midIdx - 1
    }
  }

  return smallest
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
