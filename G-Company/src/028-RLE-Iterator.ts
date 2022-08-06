// Time: O(n) | Space: O(n)
class RLEIterator {
  array: number[]
  index: number

  constructor(encoding: number[]) {
    this.array = encoding
    this.index = 0
  }

  next(n: number): number {
    while (this.index < this.array.length && n > this.array[this.index]) {
      n -= this.array[this.index]
      this.index += 2
    }

    if (this.index < this.array.length) {
      this.array[this.index] -= n
      return this.array[this.index + 1]
    }
    return -1
  }
}

const rle = new RLEIterator([3, 8, 0, 9, 2, 5])

console.log(rle.next(2))
console.log(rle.next(1))
console.log(rle.next(1))
console.log(rle.next(2))
export {}
