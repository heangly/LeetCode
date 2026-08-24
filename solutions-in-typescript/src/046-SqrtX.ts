function mySqrt(x: number): number {
  const helper = (left: number, right: number): number => {
    // Search is finished
    if (left > right) {
      return right
    }

    const mid = Math.floor((left + right) / 2)
    const square = mid * mid

    // Exact square root
    if (square === x) {
      return mid
    }

    // mid is too large
    if (square > x) {
      return helper(left, mid - 1)
    }

    // mid is too small
    return helper(mid + 1, right)
  }

  return helper(0, x)
}
