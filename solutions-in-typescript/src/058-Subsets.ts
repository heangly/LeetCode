// Time: O(n^k) | Space: O(n)
const subsets = (nums: number[]): number[][] => {
  const ans: number[][] = []
  helper(nums, 0, [], ans)
  return ans
}

const helper = (
  nums: number[],
  idx: number,
  arrSoFar: number[],
  ans: number[][]
): void => {
  ans.push(arrSoFar)

  for (let i = idx; i < nums.length; i++) {
    helper(nums, i + 1, arrSoFar.concat(nums[i]), ans)
  }
}

console.log(subsets([1, 2, 3]))

export {}
