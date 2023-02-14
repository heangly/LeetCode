// TIme: O(2n) | Space:(O(n) + O(a)) where a is the length of missing number
const findDisappearedNumbers = (nums: number[]): number[] => {
  const ans: number[] = []
  const table = new Set(nums)

  for (let i = 1; i <= nums.length; i++) {
    if (!table.has(i)) {
      ans.push(i)
    }
  }

  return ans
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
