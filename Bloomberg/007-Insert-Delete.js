// https://leetcode.com/problems/insert-delete-getrandom-o1/

class RandomizedSet {
  constructor() {
    this.map = {}
    this.values = []
  }

  insert(val) {
    if (val in this.map) return false
    this.map[val] = this.values.length
    this.values.push(val)
    return true
  }

  remove(val) {
    if (!(val in this.map)) return false

    const len = this.values.length

    const idxToSwap = this.map[val]
    const lastValue = this.values[len - 1]

    this.map[lastValue] = idxToSwap
    ;[this.values[len - 1], this.values[idxToSwap]] = [
      this.values[idxToSwap],
      this.values[len - 1]
    ]

    this.values.pop()
    delete this.map[val]
    return true
  }

  getRandom() {
    if (this.values.length === 0) return null
    let randomIdx = Math.floor(Math.random() * this.values.length)
    return this.values[randomIdx]
  }
}

const map = new Map()

map.set(1, true)
map.set(2, true)
map.set(3, true)

console.log([...map.keys()])
