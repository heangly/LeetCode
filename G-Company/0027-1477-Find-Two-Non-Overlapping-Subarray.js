/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// arr: [Int]
// target: Int

var minSumOfLengths = function (arr, target) {
  let n = arr.length
  let best = new Array(n).fill(Number.MAX_VALUE)
  let sum = 0,
    start = 0,
    ans = Number.MAX_VALUE,
    bestSoFar = Number.MAX_VALUE
  for (let i = 0; i < n; i++) {
    sum += arr[i]
    while (sum > target) {
      sum -= arr[start]
      start++
    }
    if (sum == target) {
      if (start > 0 && best[start - 1] != Number.MAX_VALUE) {
        ans = Math.min(ans, best[start - 1] + i - start + 1)
      }
      bestSoFar = Math.min(bestSoFar, i - start + 1)
    }
    best[i] = bestSoFar
  }
  return ans == Number.MAX_VALUE ? -1 : ans
}
