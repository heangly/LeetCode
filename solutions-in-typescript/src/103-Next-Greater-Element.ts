// Time: O(n) | Space: O(n)
const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  const output: number[] = []
  const table: Record<number, number> = {}

  nums2.forEach((num, index) => {
    table[num] = index
  })

  for (const num of nums1) {
    let nextValue = -1
    for (let i = table[num] + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        nextValue = nums2[i]
        break
      }
    }
    output.push(nextValue)
  }

  return output
}

const nums1 = [1, 3, 5, 2, 4]
const nums2 = [6, 5, 4, 3, 2, 1, 7]
console.log(nextGreaterElement(nums1, nums2))
