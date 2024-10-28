// https://leetcode.com/problems/powx-n/description/

// Time: O(n) | Space: O(1)
const myPow = (x: number, n: number): number => {
  if (n < 0) {
    x = 1 / x
    n *= -1
  }

  let ans = 1
  for (let i = 0; i < n; i++) {
    ans *= x
  }

  return ans
}

const x = 2.0
const n = -2
console.log(myPow(x, n))
