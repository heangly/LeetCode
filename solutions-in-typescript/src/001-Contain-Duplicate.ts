// Time: O(N) | Space: O(N)
function containsDuplicate(nums: number[]): boolean {
  const hashMap: Record<string, boolean> = {}

  for (const num of nums) {
    if (num in hashMap) {
      return true
    }

    hashMap[num] = true
  }

  return false
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
