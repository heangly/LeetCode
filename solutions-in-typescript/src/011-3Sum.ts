// Time: n^2(log(n)) | Space: O(a) where a is the length of threeSum answer
const threeSum = (nums: number[]): number[][] => {
  const target = 0
  const ans: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i]

    let left = i + 1
    let right = nums.length - 1

    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (left < right) {
      const sum = firstNum + nums[left] + nums[right]

      if (sum === target) {
        ans.push([firstNum, nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      }
    }
  }

  return ans
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-2, 0, 1, 1, 2]))
console.log(threeSum([]))
console.log(threeSum([0]))
