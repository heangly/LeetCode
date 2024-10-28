// Time: O(N∗Log(Max(Piles))) | Space: O(p)
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  let minSpeed = right

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const hours = getTotalHours(piles, mid)

    if (hours > h) {
      left = mid + 1
    } else {
      minSpeed = mid
      right = mid - 1
    }
  }

  return minSpeed
}

const getTotalHours = (piles: number[], speed: number) => piles.reduce((acc, curr) => acc + Math.ceil(curr / speed), 0)

console.log(minEatingSpeed([3, 6, 7, 11], 8))
