const longestSubarray = (nums, limit) => {
  let i = 0
  let j = 0
  let max = 0

  const maxQ = []
  const minQ = []

  while (j < nums.length) {
    let num = nums[j]

    while (maxQ.length && nums[maxQ[maxQ.length - 1]] <= num) {
      maxQ.pop()
    }

    while (minQ.length && nums[minQ[minQ.length - 1]] >= num) {
      minQ.pop()
    }

    maxQ.push(j)
    minQ.push(j)

    if (nums[maxQ[0]] - nums[minQ[0]] > limit) {
      i += 1

      if (i > maxQ[0]) {
        maxQ.shift()
      }

      if (i > minQ[0]) {
        minQ.shift()
      }
    } else {
      max = Math.max(max, j - i + 1)
      j += 1
    }
  }

  return max
}

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5))
