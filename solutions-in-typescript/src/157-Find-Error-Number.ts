// Time: O(N) | Space: O(N)
function findErrorNums(nums: number[]): number[] {
  const arr = new Array(nums.length + 1).fill(false)
  arr[0] = true
  let occurrTwice: number | null = null

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]

    if (!occurrTwice && arr[curr]) {
      occurrTwice = curr
    }

    arr[curr] = true
  }

  return [occurrTwice as number, arr.indexOf(false)]
}
