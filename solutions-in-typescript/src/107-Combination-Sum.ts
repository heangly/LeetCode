// Time: O(2 ^ n) | Space: O(T * 2^ N) where T is the target
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  const helper = (index: number, arr: number[], sum: number) => {
    if (sum > target) return
    if (sum === target) {
      res.push(arr)
      return
    }

    for (let i = index; i < candidates.length; i++) {
      helper(i, [...arr, candidates[i]], sum + candidates[i])
    }
  }

  helper(0, [], 0)
  return res
}
