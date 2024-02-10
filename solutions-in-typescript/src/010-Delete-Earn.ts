/**
Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 */

function deleteAndEarn(nums: number[]): number {
  const sortedArray = [...new Set(nums)].sort((a, b) => b - a)

  const frequentMap: Record<string, number> = {}

  for (const num of nums) {
    frequentMap[num] = (frequentMap[num] ?? 0) + num
  }

  console.log(frequentMap)

  // return topDown(0, sortedArray, frequentMap)
  return 0
}

// console.log(deleteAndEarn([3, 4, 2])) //6
// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])) //9
console.log(deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6])) //18
