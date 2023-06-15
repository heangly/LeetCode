const canJump2 = (nums: number[]): boolean => {
  const cache: Record<string, boolean> = {}

  const dp = (index: number): boolean => {
    if (index === nums.length - 1) return true
    const jumpSteps = nums[index]
    if (jumpSteps === 0) return false

    if (index in cache) return cache[index]

    for (let i = 1; i <= jumpSteps; i++) {
      const res = dp(index + i)
      cache[index] = res
      if (res) return true
    }

    return false
  }

  return dp(0)
}

console.log(canJump2([3, 2, 1, 0, 4]))
// console.log(canJump2([2, 0, 0]))
