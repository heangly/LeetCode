class Heap4 {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  // O(log(n))
  add(num: number) {
    this.heap.push(num)
    this.shiftUp()
  }

  // o(log(n))
  remove() {
    if (!this.heap.length) return

    this.swap(0, this.heap.length - 1)
    const val = this.heap.pop()!
    this.shiftDown()
    return val
  }

  // o(log(n))
  shiftUp() {
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)

    while (currentIndex > 0) {
      const parentValue = this.heap[parentIndex]
      const currentValue = this.heap[currentIndex]
      if (parentValue > currentValue) {
        this.swap(currentIndex, parentIndex)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      } else {
        break
      }
    }
  }

  // o(log(n))
  shiftDown() {
    let currentIndex = 0
    let leftChildIndex = 2 * currentIndex + 1

    while (leftChildIndex < this.heap.length) {
      let smallestChildIndex = leftChildIndex
      const rightChildIndex = 2 * currentIndex + 2
      const rightChildValue = this.heap[rightChildIndex]
      const leftChildValue = this.heap[leftChildIndex]
      const currentValue = this.heap[currentIndex]

      if (rightChildIndex < this.heap.length && rightChildValue < leftChildValue) {
        smallestChildIndex = rightChildIndex
      }

      if (currentValue > this.heap[smallestChildIndex]) {
        this.swap(currentIndex, smallestChildIndex)
        currentIndex = smallestChildIndex
        leftChildIndex = 2 * currentIndex + 1
      } else {
        break
      }
    }
  }

  //O(1)
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  //O(1)
  peek() {
    return this.heap[0]
  }
}

// Time: O(n * m * log(n * m) + k * log(n * m)) | Space: O(n * m)
function kthSmallest(matrix: number[][], k: number): number {
  const heap = new Heap4()

  for (const elements of matrix) {
    for (const element of elements) {
      heap.add(element)
    }
  }

  let count = k - 1

  while (count > 0) {
    heap.remove()
    count--
  }

  return heap.peek()
}
