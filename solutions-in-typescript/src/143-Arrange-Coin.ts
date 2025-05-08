function arrangeCoins(n: number): number {
  let left = 0,
    right = n

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const coinsUsed = (mid * (mid + 1)) / 2

    if (coinsUsed === n) {
      return mid
    } else if (coinsUsed < n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}
