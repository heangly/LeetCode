// https://leetcode.com/problems/random-pick-with-weight/

class Solution {
  arr: number[]

  constructor(w: number[]) {
    this.arr = []
    let sum = 0
    for (let i = 0; i < w.length; i++) {
      sum += w[i]
      this.arr.push(sum)
    }
  }

  pickIndex(): number {
    let target = Math.random() * this.arr[this.arr.length - 1]
    let low = 0
    let high = this.arr.length - 1
    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2)
      if (this.arr[mid] <= target) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return high
  }
}

const s = new Solution([1, 3])

console.log(s.pickIndex())

console.log(s.pickIndex())

console.log(s.pickIndex())

console.log(s.pickIndex())

console.log(s.pickIndex())

export {}
