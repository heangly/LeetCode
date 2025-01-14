function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]]

  const helper = (index: number, arr: number[]) => {
    if (index >= nums.length) return

    for (let i = index; i < nums.length; i++) {
      const newArr = [...arr, nums[i]]
      res.push(newArr)
      helper(i + 1, newArr)
    }
  }

  helper(0, [])

  return res
}
