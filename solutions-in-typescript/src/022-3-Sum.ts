function threeSum(nums: number[]): number[][] {
  const output: [number, number, number][] = []
  nums.sort((a, b) => a - b)
  const table = new Set<string>()

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const first = nums[i]
      const second = nums[left]
      const third = nums[right]
      const sum = first + second + third

      const key = `${first}:${second}:${third}`

      if (sum === 0 && !table.has(key)) {
        output.push([first, second, third])
        table.add(key)
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return output
}
