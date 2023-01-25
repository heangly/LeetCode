const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = -Infinity
  let sum = 0

  for (const num of nums) {
    sum += num
    max = Math.max(max, sum)

    if (num === 0) {
      sum = 0
    }
  }

  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
