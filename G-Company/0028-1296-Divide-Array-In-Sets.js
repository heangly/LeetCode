const isPossibleDivide = (nums, k) => {
  if (nums.length % k !== 0) return false

  nums.sort((a, b) => a - b)

  const obj = {}

  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (!(obj[num] > 0)) continue

    obj[num] -= 1

    let idx = 1

    while (idx < k) {
      if (!(obj[num + idx] > 0)) return false
      obj[num + idx] -= 1
      idx++
    }
  }
  return true
}
