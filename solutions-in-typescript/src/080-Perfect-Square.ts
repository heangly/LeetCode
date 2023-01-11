const isPerfectSquare = (num: number): boolean => {
  if (num === 1) return true
  let lo = 2
  let hi = Math.floor(num / 2)

  while (lo <= hi) {
    const midPoint = Math.floor((hi + lo) / 2)
    const res = midPoint * midPoint

    if (res === num) return true

    if (res < num) {
      lo = midPoint + 1
    } else {
      hi = midPoint - 1
    }
  }
  return false
}

console.log('====================================')
console.log(isPerfectSquare(100))
console.log('====================================')
