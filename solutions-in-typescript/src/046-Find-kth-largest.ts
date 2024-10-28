class Heap {
  private heap: number[] = []

  constructor(arr: number[]) {
    this.buildHeap(arr)
  }

  // Time: O(N) | Space: O(1)
  buildHeap(arr: number[]) {
    for (const num of arr) {
      this.insert(num)
    }
  }

  // Time: O(log(n)) | Space: O(1)
  insert(element: number) {
    this.heap.push(element)
    this.heapUp()
  }

  // Time: O(log(n)) | Space: O(1)
  remove() {
    if (this.heap.length === 0) return undefined
    this.swap(0, this.heap.length - 1)
    const value = this.heap.pop()
    this.heapDown()
    return value
  }

  swap(firstIndex: number, secondIndex: number) {
    ;[this.heap[firstIndex], this.heap[secondIndex]] = [this.heap[secondIndex], this.heap[firstIndex]]
  }

  // Time: O(log(n)) | Space: O(1)
  heapUp() {
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)

    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(parentIndex, currentIndex)
      currentIndex = parentIndex
      parentIndex = Math.floor((currentIndex - 1) / 2)
    }
  }

  // Time: O(log(n)) | Space: O(1)
  heapDown() {
    let currentIndex = 0
    let firstChildIndex = 2 * currentIndex + 1

    while (firstChildIndex < this.heap.length) {
      let secondChildIndex = 2 * currentIndex + 2
      let largestIndex = firstChildIndex

      if (secondChildIndex < this.heap.length && this.heap[secondChildIndex] > this.heap[firstChildIndex]) {
        largestIndex = secondChildIndex
      }

      if (this.heap[currentIndex] < this.heap[largestIndex]) {
        this.swap(currentIndex, largestIndex)
        currentIndex = largestIndex
        firstChildIndex = 2 * currentIndex + 1
      } else {
        break
      }
    }
  }

  peek() {
    return this.heap[0]
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new Heap(nums)
  let i = k - 1
  while (i > 0) {
    heap.remove()
    i--
  }
  return heap.peek()
}
