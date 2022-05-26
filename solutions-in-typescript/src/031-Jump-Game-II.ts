const jump = (nums: number[]): number => {
  let jumpRange = 0
  let maxReach = 0
  let step = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > jumpRange) {
      jumpRange = maxReach
      step++
    }

    maxReach = Math.max(maxReach, i + nums[i])
  }

  return step
}

console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([1, 2]))
