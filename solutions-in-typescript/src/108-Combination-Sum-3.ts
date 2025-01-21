function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const res: number[][] = []

  const helper = (index: number, arr: number[], sum: number) => {
    if (sum === target) {
      res.push([...arr])
      return
    }

    if (index >= candidates.length || sum > target) return

    arr.push(candidates[index])
    helper(index + 1, arr, sum + candidates[index])
    arr.pop()

    while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
      index++
    }
    helper(index + 1, arr, sum)
  }

  helper(0, [], 0)

  return res
}
