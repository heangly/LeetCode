// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solution/
// Time: O(nlog(n)) | space: O(1)
const minMove2 = (nums: number[]): number => {
  let move = 0
  if (nums.length === 1) return move

  nums.sort((a, b) => a - b)
  const middleValue = nums[Math.floor(nums.length / 2)]

  for (const num of nums) {
    if (num === middleValue) continue
    move = move + Math.abs(middleValue - num)
  }

  return move
}

// console.log(minMove2([1, 2, 3]))
// console.log(minMove2([1, 1, 2]))
// console.log(minMove2([1, 10, 2, 9]))
console.log(minMove2([1, 0, 0, 8, 6]))
