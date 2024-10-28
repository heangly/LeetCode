// Time: O(N) | Space: O(1)
const maxArea = (height: number[]): number => {
  let max = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const width = right - left
    const area = Math.min(height[left], height[right]) * width
    max = Math.max(max, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
