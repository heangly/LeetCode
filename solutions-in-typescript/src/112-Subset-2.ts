// Time: O(2 ^ N) | Space: O(2 ^ N)
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []
  const seen = new Set<string>()

  nums.sort((a, b) => a - b)

  const helper = (i: number, arr: number[]) => {
    if (i >= nums.length) {
      res.push([...arr])
      return
    }

    arr.push(nums[i])
    helper(i + 1, arr)

    arr.pop()
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++
    }
    helper(i + 1, arr)
  }

  helper(0, [])
  return res
}
