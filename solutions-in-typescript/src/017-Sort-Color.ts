// Time: O(n(logn))
// Space: O(N)
function sortColors(nums: number[]): void {
  const res = mergSort(nums)
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i]
  }
}

const mergSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums

  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  const leftSorted = mergSort(left)
  const rightSorted = mergSort(right)

  return merge2(leftSorted, rightSorted)
}

const merge2 = (left: number[], right: number[]): number[] => {
  let i = 0
  let j = 0
  const output: number[] = []

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      output.push(left[i])
      i++
    } else {
      output.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    output.push(left[i])
    i++
  }

  while (j < right.length) {
    output.push(right[j])
    j++
  }

  return output
}
