class Heap2 {
  private heap: number[] = []

  // O(nlog(n))
  constructor(array: number[]) {
    for (const num of array) {
      this.add(num)
    }
  }

  // O(log(n))
  add(val: number) {
    this.heap.push(val)
    this.shiftUp()
  }

  // O(log(n))
  shiftUp() {
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)

    while (currentIndex > 0) {
      const parentValue = this.heap[parentIndex]
      const currentValue = this.heap[currentIndex]

      if (parentValue < currentValue) {
        this.swap(parentIndex, currentIndex)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      } else {
        break
      }
    }
  }

  // O(log(n))
  shiftDown() {
    let currentIndex = 0
    let leftChildIndex = 2 * currentIndex + 1

    while (leftChildIndex < this.heap.length) {
      let largestChildIndex = leftChildIndex
      const rightChildIndex = 2 * currentIndex + 2
      const rightChildValue = this.heap[rightChildIndex]
      const leftChildValue = this.heap[leftChildIndex]
      const currentValue = this.heap[currentIndex]

      if (rightChildIndex < this.heap.length && rightChildValue > leftChildValue) {
        largestChildIndex = rightChildIndex
      }

      if (currentValue < this.heap[largestChildIndex]) {
        this.swap(currentIndex, largestChildIndex)
        currentIndex = largestChildIndex
        leftChildIndex = 2 * currentIndex + 1
      } else {
        break
      }
    }
  }

  // O(log(n))
  remove() {
    let i = 0
    let j = this.heap.length - 1
    this.swap(i, j)
    const value = this.heap.pop()
    this.shiftDown()
    return value
  }

  // O(log(1))
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // O(log(1))
  getSize() {
    return this.heap.length
  }

  // O(log(1))
  peek() {
    return this.heap[this.heap.length - 1]
  }
}

// Time: O(nlog(n)) | Space: O(n)
function lastStoneWeight(stones: number[]): number {
  const heap = new Heap2(stones)
  while (heap.getSize() >= 2) {
    const y = heap.remove()!
    const x = heap.remove()!
    if (y !== x) {
      const value = y - x
      heap.add(value)
    }
  }

  return heap.getSize() ? heap.peek() : 0
}
