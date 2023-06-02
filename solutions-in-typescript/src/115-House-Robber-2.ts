// Time: O(N) | Space: O(1)
const helperRob2 = (start: number, end: number, house: number[]): number => {
  if (house.length === 1) return house[0]
  if (house.length === 2) return Math.max(...house)
  let max = house[start]
  let prev1 = house[start]
  let prev2 = 0

  for (let i = start + 1; i <= end; i++) {
    max = Math.max(house[i] + prev2, prev1)
    prev2 = prev1
    prev1 = max
  }

  return max
}

const rob2 = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)
  return Math.max(helperRob2(0, nums.length - 2, nums), helperRob2(1, nums.length - 1, nums))
}
