// Time: O(N) | Space: O(N)
function twoSum(nums: number[], target: number): number[] {
  const hashMap: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const otherPair = target - currentNum

    if (otherPair in hashMap) {
      return [hashMap[otherPair], i]
    }

    hashMap[currentNum] = i
  }

  return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9))
