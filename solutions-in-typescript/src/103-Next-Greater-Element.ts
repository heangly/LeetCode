// Time: O(n) | Space: O(n)
const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  const table: Record<number, number> = {}
  const stack: number[] = [nums2[0]]

  for (let i = 1; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      table[stack.pop()!] = nums2[i]
    }
    stack.push(nums2[i])
  }

  return nums1.map((num) => table[num] || -1)
}

const nums1 = [1, 3, 5, 2, 4]
const nums2 = [6, 5, 4, 3, 2, 1, 7]
console.log(nextGreaterElement(nums1, nums2))
