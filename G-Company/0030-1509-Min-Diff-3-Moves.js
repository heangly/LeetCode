var minDifference = function (nums) {
  if (nums.length <= 4) return 0
  nums.sort((a, b) => a - b)

  let lastIdx = nums.length - 1
  let numMoves = 3
  let smallest = Infinity

  for (let i = 0; i < 4; i++) {
    let result = nums[lastIdx - i] - nums[numMoves - i]
    if (smallest > result) {
      smallest = result
    }
  }

  return smallest
}
