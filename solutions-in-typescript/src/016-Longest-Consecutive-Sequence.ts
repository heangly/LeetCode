const longestConsecutive = (nums: number[]): number => {
  let max = 0
  const mySet = new Set(nums)
  const visited = new Set<number>()

  for (const num of nums) {
    let count = 1
    let rightNum = num + 1
    let leftNum = num - 1
    visited.add(num)

    while (mySet.has(rightNum) && !visited.has(rightNum)) {
      visited.add(rightNum)
      rightNum++
      count++
    }

    while (mySet.has(leftNum) && !visited.has(leftNum)) {
      visited.add(leftNum)
      leftNum--
      count++
    }

    max = Math.max(max, count)
  }

  return max
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
