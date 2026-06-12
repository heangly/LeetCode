function subarraySum(nums: number[], k: number): number {
  const count: Record<number, number> = {}
  count[0] = 1

  let sum = 0
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const need = sum - k

    if (count[need] !== undefined) {
      result += count[need]
    }

    count[sum] = (count[sum] || 0) + 1
  }

  return result
}
