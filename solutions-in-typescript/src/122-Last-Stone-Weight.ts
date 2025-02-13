class MaxHeapm {
  private heap: number[]

  constructor(elements: number[]) {
    this.heap = []

    for (const num of elements) {
      this.insert(num)
    }
  }

  insert(num: number) {
    this.heap.push(num)
    this.shiftUp()
  }

  shiftUp() {
    let i = this.heap.length - 1
    let parentIdx = Math.floor((i - 1) / 2)

    while (i > 0 && this.heap[i] > this.heap[parentIdx]) {
      this.swap(i, parentIdx)
      i = parentIdx
      parentIdx = Math.floor((i - 1) / 2)
    }
  }

  shiftDown() {
    let i = 0
    let leftChildIdx = 2 * i + 1

    while (leftChildIdx < this.heap.length) {
      const rightChildIdx = 2 * i + 2
      let maxChildIdx = leftChildIdx

      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
        maxChildIdx = rightChildIdx
      }

      if (this.heap[maxChildIdx] > this.heap[i]) {
        this.swap(i, maxChildIdx)
        i = maxChildIdx
        leftChildIdx = 2 * i + 1
      } else {
        break
      }
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1)
    const value = this.heap.pop()
    this.shiftDown()
    return value
  }

  getTopValue() {
    return this.heap[0]
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  getLength() {
    return this.heap.length
  }

  getHeap() {
    return this.heap
  }
}

function lastStoneWeight(stones: number[]): number {
  const maxHeapm = new MaxHeapm(stones)

  while (maxHeapm.getLength() > 1) {
    const y = maxHeapm.remove()!
    const x = maxHeapm.remove()!

    if (x !== y) {
      maxHeapm.insert(y - x)
    }
  }

  return maxHeapm.getTopValue() || 0
}
