// Time: O(N)
// Space: O(1)
function maxArea(height: number[]): number {
  let i = 0
  let j = height.length - 1
  let maxWater = 0

  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i)
    maxWater = Math.max(maxWater, area)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }

  return maxWater
}
