// Time: O(nlog(n)) | Space: O(1)
const maximumProduct = (nums: number[]): number => {
  const sortedNums = nums.sort((a, b) => a - b)
  const len = sortedNums.length
  const case1 = sortedNums[len - 1] * sortedNums[len - 2] * sortedNums[len - 3]
  const case2 = sortedNums[len - 1] * sortedNums[len - 2] * sortedNums[0]
  const case3 = sortedNums[len - 1] * sortedNums[0] * sortedNums[1]
  const case4 = sortedNums[0] * sortedNums[1] * sortedNums[2]
  return Math.max(case1, case2, case3, case4)
}

console.log('====================================')
console.log(maximumProduct([-8, -7, -2, 10, 20]))
console.log('====================================')
