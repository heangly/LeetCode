const summaryRanges = (nums: number[]): string[] => {
  const ans: string[] = []
  let left = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (left === nums[i]) {
        ans.push(nums[i].toString())
      } else {
        ans.push(left + '->' + nums[i])
      }
      left = nums[i + 1]
    }
  }

  return ans
}

console.log('====================================')
console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log('====================================')
