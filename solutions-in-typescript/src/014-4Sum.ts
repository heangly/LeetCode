const fourSum = (nums: number[], target: number): number[][] => {
  nums.sort((a, b) => a - b)

  const ans: number[][] = []
  const table = new Map<string, boolean>()

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      const firstNum = nums[i]
      const secondNum = nums[j]
      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = firstNum + secondNum + nums[left] + nums[right]

        if (sum < target) {
          left++
        } else if (sum > target) {
          right--
        } else {
          const key = `${firstNum} ${secondNum} ${nums[left]} ${nums[right]}`

          if (!table.has(key)) {
            ans.push([firstNum, secondNum, nums[left], nums[right]])
            table.set(key, true)
          }

          left++
          right--
        }
      }
    }
  }

  return ans
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log('')
console.log(fourSum([2, 2, 2, 2, 2], 8))
