// Time: O(N) | Space: O(N)
function trap(height: number[]): number {
  let trappedWater = 0
  let leftMax = 0
  let rightMax = 0

  const leftMaxArr = Array(height.length).fill(0)
  const rightMaxArr = Array(height.length).fill(0)

  for (let i = 1; i < height.length - 1; i++) {
    leftMax = Math.max(leftMax, height[i - 1])
    leftMaxArr[i] = leftMax
  }

  for (let j = height.length - 2; j >= 1; j--) {
    rightMax = Math.max(rightMax, height[j + 1])
    rightMaxArr[j] = rightMax
  }

  for (let idx = 1; idx < height.length - 1; idx++) {
    const water = Math.min(leftMaxArr[idx], rightMaxArr[idx]) - height[idx]
    trappedWater += water < 0 ? 0 : water
  }

  return trappedWater
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(trap(height))
