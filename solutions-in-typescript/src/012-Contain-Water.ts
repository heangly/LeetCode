// Time: O(N) | Space: O(1)
function maxArea(height: number[]): number {
  let i = 0
  let j = height.length - 1
  let max = 0

  while (i < j) {
    const distance = j - i
    const area = Math.min(height[i], height[j]) * distance
    max = Math.max(max, area)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }

  return max
}
