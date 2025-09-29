// Time: O(N) | Space: O(n)
function trap(height: number[]): number {
  const len = height.length
  const leftMax = Array.from({ length: len }, () => 0)
  const rightMax = Array.from({ length: len }, () => 0)
  let output = 0

  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
  }

  for (let j = len - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], height[j + 1])
  }

  for (let i = 0; i < len; i++) {
    const val = Math.min(leftMax[i], rightMax[i]) - height[i]
    output += val < 0 ? 0 : val
  }

  return output
}
