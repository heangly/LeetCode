// Time: O(n + n) -> O(n) | space: O(1)
const singleNumber = (nums: number[]): number => {
  let doubledSum = 0
  for (const num of new Set(nums)) {
    doubledSum += num * 2
  }

  const sum = nums.reduce((acc, curr) => acc + curr, 0)

  return doubledSum - sum
}

console.log('====================================')
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log('====================================')

export {}
