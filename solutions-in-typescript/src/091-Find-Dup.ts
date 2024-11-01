function findDuplicate(nums: number[]): number {
  const seen = new Set<number>()

  for (const num of nums) {
    if (seen.has(num)) return num
    seen.add(num)
  }

  return -1
}
