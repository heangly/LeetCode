class MyMinHeap {
  heap: number[]
  capacity: number

  constructor(numbers: number[], k: number) {
    this.heap = []
    this.capacity = k

    for (const num of numbers) {
      this.add(num)
    }
  }

  add(num: number) {
    if (this.heap.length < this.capacity) {
      this.heap.push(num)
      this.shiftUp()
    } else {
      if (num > this.heap[0]) {
        this.heap[0] = num
        this.shiftDown()
      }
    }
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  peek() {
    return this.heap[0]
  }

  pop() {
    this.swap(0, this.heap.length - 1)
    const val = this.heap.pop()
    this.shiftDown()
    return val
  }

  shiftUp() {
    let i = this.heap.length - 1

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2)
      if (this.heap[i] < this.heap[parent]) {
        this.swap(i, parent)
        i = parent
      } else {
        break
      }
    }
  }

  shiftDown() {
    let i = 0
    let left = 2 * i + 1

    while (left < this.heap.length) {
      let toSwap = left
      const right = 2 * i + 2

      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        toSwap = right
      }

      if (this.heap[i] > this.heap[toSwap]) {
        this.swap(i, toSwap)
        i = toSwap
        left = 2 * i + 1
      } else {
        break
      }
    }
  }
}

class KthLargest {
  heap: MyMinHeap
  constructor(k: number, nums: number[]) {
    this.heap = new MyMinHeap(nums, k)
  }

  add(val: number): number {
    this.heap.add(val)
    return this.heap.peek()
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
