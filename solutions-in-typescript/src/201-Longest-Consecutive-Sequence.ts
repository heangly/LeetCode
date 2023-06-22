// Time: O(N) | Space: O(N)
const longestConsecutive = (nums: number[]): number => {
  if (!!!nums.length) return 0
  let output = 1

  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    table[nums[i]] = i
  }

  let i = 0
  while (i < nums.length) {
    const currentNum = nums[i]
    let right = currentNum + 1
    let left = currentNum - 1
    let len = 1

    while (right in table) {
      const index = table[right]
      const lastNum = nums[nums.length - 1]
      ;[nums[index], nums[nums.length - 1]] = [nums[nums.length - 1], nums[index]]
      table[lastNum] = index
      nums.pop()
      len++
      right++
    }

    while (left in table) {
      const index = table[left]
      const lastNum = nums[nums.length - 1]
      ;[nums[index], nums[nums.length - 1]] = [nums[nums.length - 1], nums[index]]
      table[lastNum] = index
      nums.pop()
      len++
      left--
    }

    output = Math.max(output, len)
    i++
  }

  return output
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
