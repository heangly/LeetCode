// Brute force: n * k
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const output: number[] = []

//   let i = 0
//   for (let j = i + k - 1; j < nums.length; j++) {
//     const max = Math.max(...nums.slice(i, j + 1))
//     output.push(max)
//     i++
//   }

//   return output
// }

//  Time: O(N) | Space: O(N)
function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = [] // Store indices of elements
  const output: number[] = []
  let start = 0 // A pointer to track the front of the deque

  for (let i = 0; i < nums.length; i++) {
    // Remove elements that are out of the current sliding window
    if (deque.length && deque[0] < i - k + 1) {
      start++ // Move start forward to invalidate the first element
    }

    // Remove elements from the back of the deque that are smaller than the current element
    while (deque.length > start && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // Add the current element's index to the deque
    deque.push(i)

    // Start adding to output when we've processed the first window
    if (i >= k - 1) {
      output.push(nums[deque[start]])
    }
  }

  return output
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
