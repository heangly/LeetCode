const removeElement = (nums: number[], val: number): number => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i]
      count++
    }
  }

  return count
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log('')
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

export {}
