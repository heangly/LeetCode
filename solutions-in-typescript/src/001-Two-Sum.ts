// Time: O(n) | Space: O(n)
const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const candidate = target - nums[i]
    if (map.has(candidate)) return [map.get(candidate)!, i]
    map.set(nums[i], i)
  }

  return [-1, -1]
}

console.log(twoSum([-3, 4, 3, 90], 0))
export {}
