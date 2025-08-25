// Time: O(N)
// Space: O(1)
const containsDuplicate = (nums: number[]) => {
  const mySet = new Set<number>()

  for (const num of nums) {
    if (mySet.has(num)) return true
    mySet.add(num)
  }

  return false
}

const test1 = [1, 2, 3, 1]
const test2 = [1, 2, 3, 4]

console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))
