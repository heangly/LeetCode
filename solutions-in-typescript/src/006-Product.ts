// Time: O(N) | Space: O(N)
function productExceptSelf(nums: number[]): number[] {
  const left = Array.from({ length: nums.length }, () => 1)
  const right = Array.from({ length: nums.length }, () => 1)

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1]
  }

  return left.map((ele, index) => ele * right[index])
}

console.log(productExceptSelf([1, 2, 3, 4]))
