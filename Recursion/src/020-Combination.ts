/**
 *     1    2    3    4
 *     |
 *
 *
 *
 *
 *
 *
 */

const combine = (n: number, k: number): number[][] => {
  const ans: number[][] = []

  const helper = (start: number, arrSoFar: number[]) => {
    if (arrSoFar.length === k) {
      ans.push(arrSoFar)
      return
    }

    for (let i = start + 1; i <= n; i++) {
      helper(i, arrSoFar.concat(i))
    }
  }

  helper(0, [])

  return ans
}

console.log('====================================')
console.log(combine(4, 3))
console.log('====================================')
