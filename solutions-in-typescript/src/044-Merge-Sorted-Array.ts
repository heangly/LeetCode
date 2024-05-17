/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Start from the end of both arrays
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  // Merge nums1 and nums2 from the end to the beginning
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
}
