const nextPermutation = (nums: number[]): void => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const largeIdx = nextLarge(i, nums)!
      swap(i, largeIdx, nums)
      reverseIt(i + 1, nums)
      return
    }
  }
  nums.reverse()
}

const reverseIt = (idx: number, nums: number[]) => {
  let start = idx
  let end = nums.length - 1
  while (start < end) {
    swap(start, end, nums)
    start++
    end--
  }
}

const nextLarge = (idx: number, nums: number[]) => {
  for (let i = nums.length - 1; i > idx; i--) {
    if (nums[i] > nums[idx]) return i
  }
}

const swap = (i: number, j: number, nums: number[]) => {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}

console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([3, 2, 1]))
console.log(nextPermutation([1, 1, 5]))
console.log(nextPermutation([1, 2, 7, 9, 6, 4, 1])) // [1, 2, 9, 1, 4, 6, 7]
console.log(nextPermutation([1, 7, 9, 9, 8, 3])) // [1, 8, 3, 7, 9, 9]
