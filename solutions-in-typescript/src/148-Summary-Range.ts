// Time; O(N) | Space: O(1)
function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  if (nums.length === 0) return result

  let start = nums[0]

  for (let i = 1; i <= nums.length; i++) {
    // When the sequence breaks or at the end of the array
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      result.push(start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`)
      start = nums[i]
    }
  }

  return result
}
