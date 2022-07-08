// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

// Time: O(k) where k is the number of step | Space: O(1)
const maxScore = (cardPoints: number[], k: number): number => {
  let tempSum = cardPoints.slice(0, k).reduce((acc, curr) => acc + curr)
  let max = tempSum
  if (cardPoints.length === k) return max

  let leftIdx = k - 1
  let rightIdx = cardPoints.length - 1

  while (leftIdx >= 0) {
    tempSum = tempSum - cardPoints[leftIdx] + cardPoints[rightIdx]
    max = Math.max(max, tempSum)

    leftIdx--
    rightIdx--
  }

  return max
}
