//https://leetcode.com/problems/next-permutation/

const nextPermutation = (nums) => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i, nums)
      ;[nums[i], nums[large]] = [nums[large], nums[i]]
      reverse(i + 1, nums)
      return nums
    }
  }
  nums.reverse()
  return nums
}

const reverse = (idx, nums) => {
  let start = idx
  let end = nums.length - 1
  while (start < end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}

const nextLarge = (idx, nums) => {
  for (let i = nums.length - 1; i > idx; i--) {
    if (nums[i] > nums[idx]) return i
  }
}

console.log(nextPermutation([1, 2, 7, 9, 6, 4, 1]))
console.log(nextPermutation([5, 4, 3, 2, 1]))
console.log(nextPermutation([1, 7, 9, 9, 8, 3]))
