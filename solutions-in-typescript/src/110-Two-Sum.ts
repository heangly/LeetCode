// Brute Force
// Time: O(n^2) | Space: O(1)
// const twoSum = (nums: number[], target: number): number[] => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
//   return []
// }

// Hash table
// Time: O(n) | Space: O(n)
const twoSum = (nums: number[], target: number): number[] => {
  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const missingPair = target - nums[i]
    if (missingPair in table) return [table[missingPair], i]
    table[nums[i]] = i
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
