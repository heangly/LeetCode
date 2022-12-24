const removeDuplicates = (nums: number[]): number => {
  let start = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[start] = nums[i]
      start++
    }
  }

  return start
}

export {}
