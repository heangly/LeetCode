const productExceptSelf = (nums: number[]): number[] => {
  const leftProduct: number[] = new Array(nums.length).fill(1)
  const rightProduct: number[] = new Array(nums.length).fill(1)
  const output: number[] = []

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    rightProduct[j] = rightProduct[j + 1] * nums[j + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProduct[i] * rightProduct[i]
  }

  return output
}

// Time: O(3n) | Space: O(3n)
// const productExceptSelf = (nums: number[]): number[] => {
//   const leftProduct: number[] = new Array(nums.length).fill(1)
//   const rightProduct: number[] = new Array(nums.length).fill(1)
//   const output: number[] = []

//   for (let i = 1; i < nums.length; i++) {
//     leftProduct[i] = leftProduct[i - 1] * nums[i - 1]
//   }

//   for (let j = nums.length - 2; j >= 0; j--) {
//     rightProduct[j] = rightProduct[j + 1] * nums[j + 1]
//   }

//   for (let i = 0; i < nums.length; i++) {
//     output[i] = leftProduct[i] * rightProduct[i]
//   }

//   return output
// }

console.log(productExceptSelf([1, 2, 3, 4]))
