// Time: O(N) | Space: O(1)
function maxArea3(height: number[]): number {
  let max = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const length = right - left
    const min = Math.min(height[left], height[right])
    const area = length * min
    max = Math.max(max, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}
