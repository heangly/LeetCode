// Time: O(n) | Space: O(2n)
const getConcatenation = (nums: number[]): number[] => {
  const ans = new Array(nums.length * 2)

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    ans[i] = val
    ans[i + nums.length] = val
  }

  return ans
}

console.log('====================================')
console.log(getConcatenation([1, 2, 1]))
console.log('====================================')
