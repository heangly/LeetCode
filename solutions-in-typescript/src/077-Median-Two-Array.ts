// Time: O(n + m) | Space: O(n + m)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let i = 0
  let j = 0

  const arr: number[] = []

  while (arr.length !== nums1.length + nums2.length) {
    const v1 = nums1[i]
    const v2 = nums2[j]

    if (v1 <= v2 || v2 === undefined) {
      arr.push(v1)
      i++
    } else {
      arr.push(v2)
      j++
    }
  }

  const midIdx = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
    return (arr[midIdx] + arr[midIdx - 1]) / 2
  } else {
    return arr[midIdx]
  }
}
