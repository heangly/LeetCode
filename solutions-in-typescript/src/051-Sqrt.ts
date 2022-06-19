// Time: O(log(n)) | Space: O(1)
const mySqrt = (x: number): number => {
  let low = 0
  let high = Math.floor(x / 2)

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    const midPow = mid * mid

    if (midPow === x) return mid

    if (midPow > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return high * high > x ? high - 1 : high
}

console.log(mySqrt(4))
console.log(mySqrt(8))
