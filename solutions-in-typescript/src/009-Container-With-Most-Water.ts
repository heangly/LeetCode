// Time: O(n) | Space: O(1)
const maxArea = (height: number[]): number => {
  //area = (idx2 - idx1) * min of (idx1, idx2)
  let max = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
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
console.log(maxArea([1, 1]))
