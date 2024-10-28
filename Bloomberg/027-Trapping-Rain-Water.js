// https://leetcode.com/problems/trapping-rain-water/
/**
 *  border = Math.max(0, i)
 *  width = j - i  - 1
 *  val = Math.min(arr[i], arr[j])
 *  sum += val * width
 *
 *
 *
 *
 *            -----------------------------------------------
 *            [0,  1,  0,  2,  1,  0,  1,  3,  2,  1,  2,  1]
 *
 */

// Time: O(n) | Space: O(1)
const trap = (height) => {
  let leftPointer = 0
  let rightPointer = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let ans = 0

  while (leftPointer < rightPointer) {
    leftMax = Math.max(leftMax, height[leftPointer])
    if (height[leftPointer] < leftMax) {
      ans += leftMax - height[leftPointer]
    }

    rightMax = Math.max(rightMax, height[rightPointer])
    if (height[rightPointer] < rightMax) {
      ans += rightMax - height[rightPointer]
    }

    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++
    } else {
      rightPointer--
    }
  }

  return ans
}

// Time: O(n) | Space: O(n)
// const trap = (height) => {
//   let leftMax = 0
//   let rightMax = 0
//   const leftPillars = []
//   const rightPillars = []
//   let output = 0

//   for (const h of height) {
//     leftMax = Math.max(leftMax, h)
//     leftPillars.push(leftMax)
//   }

//   for (let i = height.length - 1; i >= 0; i--) {
//     rightMax = Math.max(rightMax, height[i])
//     rightPillars[i] = rightMax
//   }

//   for (let i = 0; i < leftPillars.length; i++) {
//     const val = Math.min(leftPillars[i], rightPillars[i]) - height[i]
//     output += val
//   }

//   return output
// }

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
