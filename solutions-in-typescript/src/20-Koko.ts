function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  let min = right

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const hour = getTotalHours(piles, mid)

    if (hour <= h) {
      right = mid - 1
      min = Math.min(min, mid)
    } else {
      left = mid + 1
    }
  }

  return min
}

const getTotalHours = (piles: number[], speed: number) => {
  return piles.reduce((acc, curr) => acc + Math.ceil(curr / speed), 0)
}
